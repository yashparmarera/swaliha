## Website architecture
- Keep clinic facts and WhatsApp request generation in a shared browser-safe module so all appointment actions stay consistent.
- Use a shared website shell and separate TanStack content routes with individual metadata so navigation and search previews describe each page.
- Keep presentation tokens and reusable layout styles in the global stylesheet so the visual system remains consistent.
