import { describe, expect, it } from 'vitest';
import { appointmentUrl, clinic } from './clinic';
describe('Supplied consultation rules', () => {
 it('prices clinic visits at ₹2,000 and includes the type in the request', () => {
  const url = new URL(appointmentUrl('Clinic visit'));
  expect(clinic.fee).toBe(2000);
  expect(url.searchParams.get('text')).toContain('clinic visit appointment (₹2,000)');
 });
 it('prices video consultations at ₹2,000 and includes the type in the request', () => {
  expect(new URL(appointmentUrl('Video consultation')).searchParams.get('text')).toContain('video consultation appointment (₹2,000)');
 });
 it('sends both appointment requests to +91 8796142665 on WhatsApp', () => {
  for (const type of ['Clinic visit', 'Video consultation'] as const) {
   const url = new URL(appointmentUrl(type));
   expect(url.origin).toBe('https://wa.me');
   expect(url.pathname).toBe('/918796142665');
  }
 });
});
