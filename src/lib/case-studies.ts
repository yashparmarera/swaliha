/**
 * Case studies for the "Areas of support" sections.
 *
 * IMPORTANT: every study here is an ILLUSTRATIVE COMPOSITE written for education.
 * Names, ages, jobs and events are fictional and do not describe any real client.
 * Outcomes are examples, not promises. The site shows this disclaimer on every study.
 *
 * Keep this file browser-safe (no server imports) so routes and components can share it.
 */

export type ArtKind =
  | "counselling"
  | "anxiety"
  | "sleep"
  | "confidence"
  | "relationships"
  | "habits"
  | "hypnotherapy"
  | "elderly";

export type Reference = { text: string; href?: string };

export type CaseStudy = {
  slug: string;
  /** Position in the Areas of support list (0-based), so cards can link to the right study. */
  supportIndex: number;
  area: string;
  art: ArtKind;
  title: string;
  dek: string;
  readMinutes: number;
  persona: { name: string; age: number; line: string };
  snapshot: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  pull: string;
  takeaways: string[];
  research: { heading: string; body: string[]; caveat: string };
  references: Reference[];
};

export const compositeNote =
  "This is an illustrative composite case written for education. The name, age, job and events are fictional and do not describe any real client. Every person’s experience differs, and outcomes cannot be promised.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "when-everything-feels-numb",
    supportIndex: 0,
    area: "Counselling & emotional well-being",
    art: "counselling",
    title: "When everything feels numb: finding words for a year that had none",
    dek: "After a bereavement and two big life changes, Meera kept saying she was “fine”. Counselling began with the smallest possible task: listening.",
    readMinutes: 6,
    persona: {
      name: "Meera",
      age: 38,
      line: "Project manager, Gurugram. Lost her father in March, was promoted in June, and moved flat in September.",
    },
    snapshot: [
      {
        label: "What brought her in",
        value: "Numbness, tiredness and tearfulness she could not explain",
      },
      { label: "Format", value: "In-clinic, weekly" },
      { label: "Sessions", value: "8 over about 10 weeks" },
      {
        label: "Approach",
        value: "Person-centred counselling, emotion labelling, grief-informed work",
      },
    ],
    sections: [
      {
        heading: "She called it “fine”",
        body: [
          "Meera’s sister was the one who made the appointment. She had noticed that Meera had stopped humming while she cooked, and that she had cried at a biscuit advertisement and then looked confused about it.",
          "In the first session Meera described her year in the tone of someone reading out a timetable. Her father had died in March. She had arranged everything: the hospital, the paperwork, the ceremonies, the relatives who needed picking up from the station. In June she was promoted. In September she moved flats. “It’s all been fine,” she said, three times.",
        ],
      },
      {
        heading: "The first job was not to fix anything",
        body: [
          "There was a temptation, for everyone around her, to treat this as a problem with a solution. We did the opposite. The early sessions were slow on purpose. We talked about what a normal day looked like, what she was eating, how she was sleeping, and what she did when the house went quiet.",
          "We also asked, plainly, about low mood, hopelessness and any thoughts of harming herself. There were none, but we agreed on a simple safety net: if the heaviness deepened or lasted, she would see her doctor, because persistent low mood sometimes needs medical assessment as well as talking.",
        ],
      },
      {
        heading: "Giving feelings a name",
        body: [
          "Meera could list what she had done but not what she had felt. So we started small. At the end of each day she wrote three words for her mood, and she was allowed to use the same word twice. “Flat”, “tight” and “tired” appeared a lot in the first fortnight.",
          "By week four the words had changed. “Irritated at the cousins.” “Missing him in the kitchen.” “Relieved that the promotion came with a team.” None of these were dramatic. They were simply accurate, and accuracy turned out to be a relief in itself.",
        ],
      },
      {
        heading: "Making room for a grief that wasn’t tidy",
        body: [
          "Meera had been the practical one, and practical people rarely get to grieve on schedule. In session five she brought her father’s last voice message, two lines asking whether she had eaten. She had never played it again. She played it in the room, and cried for the first time since March.",
          "Afterwards she did not feel “better”. She felt tired and lighter, which is common. The work from then on was less about the past and more about making ordinary life gentler: asking her manager for Friday afternoons free, cooking his favourite dal on Sundays, and telling her sister the truth when asked how she was.",
        ],
      },
      {
        heading: "What shifted, and what didn’t",
        body: [
          "At the last session Meera said “fine” once, and then laughed and corrected herself: “Tired, but okay. Some days not okay.” That correction was the real outcome.",
          "Her grief had not gone and nobody expected it to. What changed was that she had words for it, people to say them to, and a few small habits that made room for it. We agreed that she could return for a top-up session around the first anniversary, which is often a hard time.",
        ],
      },
    ],
    pull: "Accuracy turned out to be a relief in itself.",
    takeaways: [
      "Being “fine” for a long time can quietly cost more than it appears to.",
      "Naming a feeling, even in small words, is a real skill and it can be practised.",
      "Grief rarely follows a tidy order; there is no correct way to do it.",
      "Counselling can sit alongside medical care when low mood is persistent.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "Putting feelings into words has been studied in the laboratory. In an often-cited experiment, people who labelled the emotion in a distressing picture showed less activity in the brain’s threat-detection region than people who did not, which supports the everyday idea that naming a feeling can take some of its edge off.",
        "Research on emotion regulation also suggests that habitually suppressing feelings tends to carry costs, including more physical stress responses and weaker memory for the situation, while approaches that help people understand and reappraise their emotions tend to fare better.",
        "For context, India’s National Mental Health Survey (2015–16) estimated that roughly one in ten adults had a mental health condition at the time of the survey, and that most people who needed help were not receiving it. Reaching out is common, not unusual.",
      ],
      caveat:
        "This is education, not diagnosis. If low mood is severe, lasts more than a couple of weeks, or includes thoughts of self-harm, please see a doctor or call Tele-MANAS on 14416.",
    },
    references: [
      {
        text: "Lieberman MD, et al. (2007). Putting feelings into words: affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.",
      },
      {
        text: "Gross JJ (2002). Emotion regulation: affective, cognitive, and social consequences. Psychophysiology, 39(3), 281–291.",
      },
      {
        text: "Gururaj G, et al. (2016). National Mental Health Survey of India, 2015–16: Summary. NIMHANS, Bengaluru.",
      },
    ],
  },
  {
    slug: "the-month-end-panic",
    supportIndex: 1,
    area: "Stress & anxiety",
    art: "anxiety",
    title: "The month-end panic: learning that the alarm is not the danger",
    dek: "Arjun’s heart raced every closing week. A normal ECG ruled out the heart but not the fear, which is where the real work began.",
    readMinutes: 7,
    persona: {
      name: "Arjun",
      age: 29,
      line: "Chartered accountant, Delhi. Panic episodes in the final days of every month-end close.",
    },
    snapshot: [
      {
        label: "What brought him in",
        value: "Racing heart, chest tightness and fear of the next episode",
      },
      { label: "Format", value: "In-clinic, then video" },
      { label: "Sessions", value: "7 over about 9 weeks" },
      {
        label: "Approach",
        value: "Psychoeducation, breathing retraining, graded exposure, hypnotic relaxation",
      },
    ],
    sections: [
      {
        heading: "They ruled out the heart, not the fear",
        body: [
          "The first episode happened in a meeting. Arjun’s chest tightened, his hands tingled and he was sure something was badly wrong. He went to an emergency room. The ECG and blood tests were normal and a kind doctor told him it was “probably stress”.",
          "That should have been reassuring. Instead it left him with a new problem: if it wasn’t his heart, then what was it, and when would it happen again? By the time he reached us, he was dreading the last week of every month, skipping meetings, drinking six cups of tea and coffee a day, and sleeping about five hours.",
        ],
      },
      {
        heading: "Medical first, then psychology",
        body: [
          "We began by confirming that his doctor had already examined him and asking him to keep that follow-up. Chest symptoms always deserve a medical check before anyone assumes anxiety. Only then did we turn to what his body was doing and why.",
        ],
      },
      {
        heading: "How panic builds a loop",
        body: [
          "We drew it on a page. A normal bodily sensation, such as a fast heartbeat after a coffee, is noticed. It is read as danger. The body responds with more adrenaline. The sensation gets stronger, which seems to confirm the danger. Within a minute the loop is spinning on its own.",
          "Seeing this on paper changed something. Arjun’s first comment was, “So the alarm is real, but there’s no fire.” That sentence became the anchor of the whole work.",
        ],
      },
      {
        heading: "Teaching the body to stand down",
        body: [
          "We reduced the caffeine gradually, because it was feeding the very sensations he feared. We practised slow breathing with a longer out-breath than in-breath, five minutes twice a day when calm, so that it would be available when needed.",
          "In sessions we also used hypnotic relaxation. We explained it honestly as a state of focused attention and deep ease, not sleep and not a loss of control. He recorded the session on his phone and used it at night. In trance we rehearsed a month-end close in which his heart sped up and he simply let it, breathing out slowly, until it passed.",
        ],
      },
      {
        heading: "Going towards it",
        body: [
          "Avoidance feels like safety but it teaches the brain that meetings are dangerous. We built a gentle ladder: five minutes of a team meeting, then fifteen, then presenting one slide. Arjun marked each step with how bad he predicted it would be and how bad it actually was. The gap between those two numbers became his best evidence.",
          "In week six, an audit landed unexpectedly and he had an episode at his desk. He used his breathing, let it crest, and was back to work in about ten minutes. “It came,” he said, “and it left.” That was the real turning point, not the absence of panic but the end of fearing it.",
        ],
      },
    ],
    pull: "It came, and it left. That was the real turning point.",
    takeaways: [
      "Get chest symptoms checked medically first; then address the fear.",
      "Panic is a false alarm in a real body, which is why it feels so convincing.",
      "Avoidance helps in the moment and keeps the fear alive over time.",
      "Skills work best when practised calmly, before they are needed.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "Cognitive behavioural therapy has the strongest research base for anxiety. A large review of meta-analyses found good support for CBT in anxiety-related conditions and in managing general stress.",
        "Hypnosis has also been studied for anxiety. A 2019 meta-analysis found that people treated with hypnosis improved more than most control participants, and that the benefit was larger when hypnosis was combined with other psychological methods than when used alone. Earlier reviews were more cautious because many trials were small, so it is best seen as a helpful addition rather than a stand-alone cure.",
        "Stress itself is not the enemy. Research on stress physiology describes how short bursts of the stress response protect us, while being switched on for months without recovery is what wears the body down. That is why recovery time matters as much as coping skills.",
      ],
      caveat:
        "Chest pain, breathlessness or fainting always need medical assessment. This case does not replace care from a doctor or psychiatrist.",
    },
    references: [
      {
        text: "Hofmann SG, et al. (2012). The efficacy of cognitive behavioral therapy: a review of meta-analyses. Cognitive Therapy and Research, 36, 427–440.",
      },
      {
        text: "Valentine KE, Milling LS, Clark LJ, Moriarty CL (2019). The efficacy of hypnosis as a treatment for anxiety: a meta-analysis. International Journal of Clinical and Experimental Hypnosis, 67(3), 336–363.",
        href: "https://www.tandfonline.com/doi/full/10.1080/00207144.2019.1613863",
      },
      {
        text: "McEwen BS (1998). Protective and damaging effects of stress mediators. New England Journal of Medicine, 338(3), 171–179.",
      },
    ],
  },
  {
    slug: "awake-at-3-am",
    supportIndex: 2,
    area: "Sleep & relaxation",
    art: "sleep",
    title: "Awake at 3 a.m.: retraining a mind that stopped trusting the night",
    dek: "Kavita could fall asleep. Staying asleep was the problem, and the dread of bedtime had become part of it.",
    readMinutes: 6,
    persona: {
      name: "Kavita",
      age: 34,
      line: "Marketing manager and mother of a toddler, Noida. Awake most nights between 3 and 5 a.m.",
    },
    snapshot: [
      {
        label: "What brought her in",
        value: "Waking at 3 a.m. with a racing mind, and dreading bedtime",
      },
      { label: "Format", value: "Video, evenings" },
      { label: "Sessions", value: "5 over about 6 weeks" },
      {
        label: "Approach",
        value: "Sleep-habit retraining (CBT-I principles), hypnotic relaxation",
      },
    ],
    sections: [
      {
        heading: "The 3 a.m. committee",
        body: [
          "Kavita described it as a committee that convened without her permission. At 3 a.m. it reviewed tomorrow’s presentation, her toddler’s cough, a comment her manager made in April and whether she had paid the electricity bill.",
          "She would pick up her phone “just to check the time”, which became twenty minutes of scrolling. By morning she was exhausted, so she napped when she could and drank more coffee, which, she suspected correctly, made the nights worse.",
        ],
      },
      {
        heading: "Before touching sleep, we checked the obvious",
        body: [
          "Persistent poor sleep can have physical causes. Kavita had already seen her GP, who checked her thyroid and iron levels; both were normal. We also looked at caffeine timing, alcohol, any medication, and whether a partner had noticed loud snoring or pauses in her breathing. None of these explained it, so we turned to habits and the way her mind had come to treat the bed.",
        ],
      },
      {
        heading: "Teaching the bed what it is for",
        body: [
          "A bed that has hosted months of frustrated wakefulness starts to signal alertness. We used a few well-established steps. The bed was only for sleep. If she was awake for what felt like twenty minutes, she would get up, sit somewhere dim, and return only when sleepy. Her wake-up time stayed the same every day, weekends included, and the phone charged outside the bedroom.",
          "We added “worry time”: ten minutes at 8 p.m., on paper, where the committee could meet properly. She wrote down concerns and one possible next step for each. Interestingly, the 3 a.m. meetings got shorter once the earlier one existed.",
        ],
      },
      {
        heading: "A recording for the in-between hours",
        body: [
          "In session we practised hypnotic relaxation: a slow body scan, heaviness in the limbs, and an image she chose herself, a quiet verandah at her grandmother’s house in the rain. We recorded it so she could use it at bedtime or after a night waking.",
          "We were clear with her that this is a tool for settling the body and quieting the mind, not a switch that forces sleep. Pressure to fall asleep is itself a cause of insomnia.",
        ],
      },
      {
        heading: "An honest week three",
        body: [
          "Week three was harder. A fixed wake time and getting out of bed meant she was more tired for several days before things improved. We had warned her this might happen, which helped her stay with it.",
          "By week five she was still waking some nights, but she fell back asleep in about fifteen or twenty minutes instead of two hours. More importantly, she stopped dreading bedtime. “I don’t negotiate with the night anymore,” she said.",
        ],
      },
    ],
    pull: "I don’t negotiate with the night anymore.",
    takeaways: [
      "Rule out physical causes first, then look at habits and thinking.",
      "Trying hard to sleep usually backfires; calm, regular routines work better.",
      "A short earlier “worry time” can reduce night-time rumination.",
      "Improvement is often uneven. A rough week does not mean failure.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "For long-term insomnia, guidelines such as the American College of Physicians’ recommend cognitive behavioural therapy for insomnia (CBT-I) as the first treatment, ahead of sleeping tablets. Its core ingredients are the ones used here: consistent timing, using the bed only for sleep, and changing unhelpful thoughts about sleep.",
        "Hypnosis and sleep have been studied more recently. In a small laboratory study of healthy young volunteers, a recorded suggestion to “sleep deeper” increased the amount of deep, slow-wave sleep during a nap, mainly in people who respond strongly to hypnosis. This is an early and interesting finding, but it was not a trial in people with insomnia, so it cannot be taken as proof that hypnosis treats insomnia.",
      ],
      caveat:
        "See a doctor if poor sleep lasts for weeks, if you snore loudly or stop breathing in your sleep, or if low mood or anxiety is severe. Do not stop prescribed medication without advice.",
    },
    references: [
      {
        text: "Qaseem A, et al. (2016). Management of chronic insomnia disorder in adults: a clinical practice guideline from the American College of Physicians. Annals of Internal Medicine, 165(2), 125–133.",
      },
      {
        text: "Cordi MJ, Schlarb AA, Rasch B (2014). Deepening sleep by hypnotic suggestion. Sleep, 37(6), 1143–1152.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4015388/",
      },
    ],
  },
  {
    slug: "the-quiet-promotion-decline",
    supportIndex: 3,
    area: "Confidence & personal growth",
    art: "confidence",
    title: "The quiet “no” to a promotion: meeting the voice that says you’re a fraud",
    dek: "Rohan was good at his job and certain he wasn’t. The turning point was not more positive thinking, but a kinder relationship with himself.",
    readMinutes: 6,
    persona: {
      name: "Rohan",
      age: 27,
      line: "Product designer working remotely for a Delhi start-up. Had turned down a lead role twice.",
    },
    snapshot: [
      {
        label: "What brought him in",
        value: "Self-doubt, deflecting praise, avoiding visible roles",
      },
      { label: "Format", value: "Video" },
      { label: "Sessions", value: "8 over about 10 weeks" },
      {
        label: "Approach",
        value: "Self-compassion work, cognitive reframing, strengths evidence, guided imagery",
      },
    ],
    sections: [
      {
        heading: "Good at the work, sure he wasn’t",
        body: [
          "On paper Rohan’s year looked excellent. His redesign of the onboarding flow had lifted completion rates, and his team lead had twice offered him a lead role. Both times he said he needed “more experience”. In private, he was waiting for someone to discover that he had simply been lucky.",
          "When colleagues praised his work he deflected: “It was a team effort.” He over-prepared for every review and still left each one convinced he had been exposed.",
        ],
      },
      {
        heading: "Where the voice came from",
        body: [
          "We spent time on the origins of that inner voice, not to blame anyone but to understand it. At school Rohan had been in a class where a ranked list went up on the board after every exam. His father, wanting the best for him, had a habit of asking who had scored higher. Rohan learnt that being fine was not enough; only being first counted.",
          "Understanding this did not make the voice disappear. It did change how he heard it. “That’s not the truth about me,” he said in session three. “That’s a very old teacher.”",
        ],
      },
      {
        heading: "Not a flaw to remove, a voice to meet",
        body: [
          "Rohan’s first instinct was to fight the thoughts, which usually makes them louder. We worked instead on self-compassion: speaking to himself as he would speak to a junior colleague in the same position. He found this awkward and a little embarrassing, which is normal. By week five it came more easily.",
          "Alongside this we built an evidence file: dated notes on work that went well, feedback received, problems he solved. Not as a way to argue with doubt, but to give it something solid to look at.",
        ],
      },
      {
        heading: "Rehearsing the thing he feared",
        body: [
          "In guided-imagery sessions, Rohan pictured himself leading a design review: sitting calmly, stating a view, hearing a challenge and answering it without apology. We kept the images realistic. Not triumph, just steadiness. He practised this between sessions and then tried small versions in real meetings.",
        ],
      },
      {
        heading: "The third offer",
        body: [
          "When the lead role was offered a third time, Rohan said yes, with a condition he proposed himself: a ninety-day check-in with his manager. He still feels doubt before big reviews. The difference is that he recognises it as an old reflex and not a verdict.",
        ],
      },
    ],
    pull: "That’s not the truth about me. That’s a very old teacher.",
    takeaways: [
      "Self-doubt is often learnt early; understanding its origin loosens its grip.",
      "Fighting the inner critic usually amplifies it. Meeting it works better.",
      "Self-confidence grows from small, real experiences of coping.",
      "Feeling like a fraud is common among capable people and is not a diagnosis.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "The “impostor phenomenon” was first described in 1978 among high-achieving women. Later work found it in people of all genders and many professions, usually linked to perfectionism and fear of evaluation.",
        "Self-compassion has been studied in programmes such as Mindful Self-Compassion. In a controlled trial, participants who completed the programme reported greater self-compassion and well-being, and lower depression, anxiety and stress, compared with a waiting-list group.",
        "Bandura’s work on self-efficacy suggests that the most powerful source of confidence is mastery: actually doing something difficult and coping. That is why the work moved from thinking to practice.",
      ],
      caveat:
        "Persistent low mood, loss of interest or hopelessness can be signs of depression and deserve a professional assessment.",
    },
    references: [
      {
        text: "Clance PR, Imes SA (1978). The impostor phenomenon in high achieving women. Psychotherapy: Theory, Research & Practice, 15(3), 241–247.",
      },
      {
        text: "Neff KD, Germer CK (2013). A pilot study and randomized controlled trial of the Mindful Self-Compassion program. Journal of Clinical Psychology, 69(1), 28–44.",
      },
      {
        text: "Bandura A (1977). Self-efficacy: toward a unifying theory of behavioral change. Psychological Review, 84(2), 191–215.",
      },
    ],
  },
  {
    slug: "two-people-one-small-flat",
    supportIndex: 4,
    area: "Relationships & life concerns",
    art: "relationships",
    title: "Two people, one small flat: a new marriage and the arguments about nothing",
    dek: "Neha and her husband weren’t really fighting about dishes. A move into a joint family had made her feel unseen, and she did not know how to say so.",
    readMinutes: 7,
    persona: {
      name: "Neha",
      age: 33,
      line: "School teacher who moved to Delhi after marriage and now lives with her husband Sameer and his parents.",
    },
    snapshot: [
      {
        label: "What brought her in",
        value: "Escalating arguments, long silences, feeling unseen at home",
      },
      { label: "Format", value: "In-clinic, one joint session" },
      { label: "Sessions", value: "6 over about 8 weeks" },
      { label: "Approach", value: "Communication skills, boundary-setting, values clarification" },
    ],
    sections: [
      {
        heading: "It wasn’t about the dishes",
        body: [
          "Neha’s first sentence was about a pile of tea cups. Within ten minutes it had become about everything: a new city, a new job, a household that ran on rules nobody had told her, and a husband who, she felt, had stopped taking her side.",
          "When arguments flared she went quiet, sometimes for days. Sameer, who felt shut out, grew louder. Both were exhausted, and neither wanted the marriage to end. They wanted to feel like a team again.",
        ],
      },
      {
        heading: "Needs underneath the positions",
        body: [
          "In counselling we separated what Neha wanted (“Sameer should do half the housework”) from what she needed (to feel that this was her home, too). The first is a request about tasks. The second is a request about belonging. When we named it that way she cried, because nobody, including her, had said it aloud.",
          "We were careful not to cast anyone as the villain. In many joint families, expectations are unspoken, affectionate and rigid at the same time. Her in-laws weren’t unkind. They had simply never needed to explain the house to anyone.",
        ],
      },
      {
        heading: "The first three minutes",
        body: [
          "We practised how a difficult conversation begins. Neha’s openings tended to be accusations (“You never notice anything”), which prompt defence, and her silence came when she felt flooded. We replaced these with a softer pattern: say what you feel, name the situation, state one specific request. “I’m feeling a bit lost in the evenings. Could we sit together for twenty minutes after dinner?”",
          "We role-played it several times until it felt less like a script. Naming a need in the first minutes, rather than listing grievances, changed the temperature of the conversation.",
        ],
      },
      {
        heading: "Boundaries without walls",
        body: [
          "Neha also wanted two evenings a week to herself, which she feared would sound rude. We rehearsed a warm version for her mother-in-law: appreciative, specific and unapologetic. She tried it on a Tuesday. Her mother-in-law said, “Of course, beta,” and offered to keep the evening meal simple.",
          "In one joint session, Sameer listened without defending himself for the first time. They agreed on a twenty-minute weekly check-in, just the two of them, with one rule: no solving, only listening for the first ten minutes.",
        ],
      },
      {
        heading: "What changed, and what remains",
        body: [
          "Arguments became shorter and the silences stopped lasting days. Some things did not change. The family’s expectations about hosting relatives are the same, and Neha still finds Sunday afternoons difficult. But she now has words, a partner who hears them, and some time that belongs to her.",
        ],
      },
    ],
    pull: "She wasn’t asking for a different husband. She was asking to belong.",
    takeaways: [
      "Arguments about chores are often arguments about belonging or respect.",
      "How a conversation begins strongly shapes how it ends.",
      "Boundaries can be warm; they don’t need to be walls.",
      "Counselling can start with one partner, but it works best when both are willing to listen.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "In longitudinal research on couples, the way a difficult conversation opens has been found to predict a great deal about how it unfolds. A harsh start, such as criticism or contempt, tends to lead to defensiveness and withdrawal, while a gentle start makes repair more likely.",
        "Relationships matter for health too. A large meta-analysis of 148 studies found that people with stronger social relationships had a substantially greater likelihood of survival than those with weaker ones, a finding on the same order as several well-known health risks.",
      ],
      caveat:
        "If a relationship involves fear, control, threats or violence, this is not a communication problem and different help is needed. In India, the Women Helpline is 181; in an emergency call 112.",
    },
    references: [
      {
        text: "Carrère S, Gottman JM (1999). Predicting divorce among newlyweds from the first three minutes of a marital conflict discussion. Family Process, 38(3), 293–301.",
      },
      {
        text: "Holt-Lunstad J, Smith TB, Layton JB (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine, 7(7), e1000316.",
      },
    ],
  },
  {
    slug: "the-11-pm-scroll",
    supportIndex: 5,
    area: "Habits & behaviour",
    art: "habits",
    title: "The 11 p.m. scroll: why willpower was never the right plan",
    dek: "Imran had deleted the apps, set the timers and promised himself every morning. The habit survived because it was doing a job.",
    readMinutes: 6,
    persona: {
      name: "Imran",
      age: 31,
      line: "Freelance video editor, Delhi. Late-night phone scrolling and snacking after stressful days.",
    },
    snapshot: [
      {
        label: "What brought him in",
        value: "Late-night scrolling and snacking, guilt, about five hours of sleep",
      },
      { label: "Format", value: "In-clinic" },
      { label: "Sessions", value: "6 over about 8 weeks" },
      {
        label: "Approach",
        value: "Habit-loop mapping, implementation intentions, urge surfing, hypnotic rehearsal",
      },
    ],
    sections: [
      {
        heading: "Willpower had been the plan",
        body: [
          "Imran’s routine was the same most evenings. He finished a demanding edit at about nine, ate dinner, watched something, and by 10:45 he was on the sofa with his phone and a packet of namkeen. He would look up at 1:30 a.m., annoyed with himself.",
          "He had tried deleting apps (he reinstalled them), screen-time limits (he dismissed them) and stern promises each morning. Every failure added shame, and shame, as he noticed, made evenings harder.",
        ],
      },
      {
        heading: "Mapping the loop",
        body: [
          "We stopped asking “why can’t I stop?” and asked “what is this doing for me?” Over a week Imran kept notes. The cue was a specific moment: sitting on the sofa after the day’s last task, mentally flat and wired at once. The routine was scrolling and snacking. The reward was relief, a few hours when no client could ask for anything.",
          "Seeing the reward changed the plan. The habit wasn’t foolish. It was an efficient way to decompress. Removing it without replacing the relief would just leave a gap.",
        ],
      },
      {
        heading: "Changing the route, not the destination",
        body: [
          "Imran wanted relief to come in a form that didn’t cost him his sleep. He experimented with alternatives: a ten-minute walk after his last task, a hot shower, music with the lights low. He chose a walk and tea. We also made the old route slightly harder: the phone charged in the hallway, and the snacks were no longer in the living room.",
          "He wrote an if-then plan: “If I finish my last task, then I put on my shoes and walk around the block.” Such specific plans help because they decide in advance, when the mind is clear.",
        ],
      },
      {
        heading: "Riding out an urge",
        body: [
          "We practised noticing an urge without obeying it: where it sits in the body, how it rises, crests and fades, usually within minutes. In hypnotic relaxation sessions Imran rehearsed the cue, the walk and the quiet satisfaction of an early night, so the new sequence felt familiar before he tried it for real.",
        ],
      },
      {
        heading: "Slips are data",
        body: [
          "In week four a deadline wrecked the routine and he scrolled until 2 a.m. The old Imran would have written the week off. This time he treated it as information: the plan had no version for very bad days. We built one, a short breathing practice and ten minutes with a book.",
          "By the end he was walking on most evenings and in bed before midnight on most nights. The scroll hasn’t vanished. It is now a choice sometimes, rather than a trap every night.",
        ],
      },
    ],
    pull: "The habit wasn’t foolish. It was an efficient way to decompress.",
    takeaways: [
      "Most habits do a job. Find the job before trying to remove the habit.",
      "Specific if-then plans beat vague resolutions.",
      "Shame fuels the habit; curiosity helps more.",
      "Expect slips and plan for bad days in advance.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "A study that followed people forming a new daily habit found it took a median of 66 days for the behaviour to feel automatic, with a very wide range from 18 to 254 days, and that missing a single day did not derail the process. Habit change is slower and more forgiving than most people assume.",
        "Psychologists describe habits as responses that become linked to cues in our environment, which is why changing cues and routines tends to work better than relying on intention alone.",
        "On hypnosis specifically, we want to be straightforward. It is used here as a rehearsal and relaxation tool, but evidence for hypnotherapy as a stand-alone method of changing habits is mixed. For example, a Cochrane review of hypnotherapy for stopping smoking found no good evidence that it helped people quit more than counselling delivered for the same amount of time.",
      ],
      caveat:
        "Compulsive behaviours, addiction and disordered eating need specialist assessment. This case describes an everyday habit, not a clinical condition.",
    },
    references: [
      {
        text: "Lally P, van Jaarsveld CHM, Potts HWW, Wardle J (2010). How are habits formed: modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998–1009.",
      },
      {
        text: "Wood W, Neal DT (2007). A new look at habits and the habit-goal interface. Psychological Review, 114(4), 843–863.",
      },
      {
        text: "Barnes J, McRobbie H, Dong CY, Walker N, Hartmann-Boyce J (2019). Hypnotherapy for smoking cessation. Cochrane Database of Systematic Reviews, CD001008.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31198991/",
      },
    ],
  },
  {
    slug: "afraid-of-the-dental-chair",
    supportIndex: 6,
    area: "Clinical hypnotherapy",
    art: "hypnotherapy",
    title: "Afraid of the dental chair: what hypnotherapy actually looks like",
    dek: "Anita had put off treatment for two years. Her first question was whether hypnosis would make her do something silly. It would not.",
    readMinutes: 7,
    persona: {
      name: "Anita",
      age: 41,
      line: "Primary school teacher, Delhi. Avoided dental treatment for two years because of intense fear.",
    },
    snapshot: [
      { label: "What brought her in", value: "Panic about a needed dental procedure" },
      { label: "Format", value: "In-clinic, with the dentist’s agreement" },
      { label: "Sessions", value: "4, then support on the day of treatment" },
      {
        label: "Approach",
        value: "Clinical hypnosis, self-hypnosis, gradual exposure, informed consent",
      },
    ],
    sections: [
      {
        heading: "Two years of chewing on one side",
        body: [
          "A cracked molar had been bothering Anita since the monsoon of the year before last. She knew she needed treatment. But the sound of a dental drill, the smell of clove oil, and the memory of a painful procedure when she was nine had her stomach in knots before she even reached the clinic door. She had cancelled four appointments.",
          "When she called us her first question was, “Will I be made to do anything embarrassing?” It is the most common question people ask about hypnosis, and the answer is no.",
        ],
      },
      {
        heading: "What hypnosis is, and isn’t",
        body: [
          "Before any trance, we spent a full session on explanation. Clinical hypnosis is a state of focused attention and deep relaxation in which the mind becomes more open to helpful suggestions. It is not sleep, it is not mind control, and it is nothing like stage shows. You remain aware, you can open your eyes whenever you wish, and you will not accept a suggestion that conflicts with your values.",
          "Anita signed a consent form and chose the pace. She asked to keep her eyes open for the first attempt. That was perfectly fine; many people begin that way.",
        ],
      },
      {
        heading: "Her first trance",
        body: [
          "In the second session, Anita settled into the chair, heard a slow, steady voice, and focused on her breathing and a place she loved, her aunt’s courtyard in Lucknow. Afterwards she was surprised: “I heard everything. I just stopped caring about the noise.” This is how most people describe it: absorbed, relaxed and in control.",
          "We built a private cue, pressing thumb and forefinger together, which she could use to bring back the same sense of calm anywhere.",
        ],
      },
      {
        heading: "A pattern, not an excavation",
        body: [
          "We talked about the old procedure at a comfortable distance. We were not digging for memories, which can be unhelpful and, in some cases, unreliable. Our aim was to notice the pattern: the clove smell, the drill sound, and then a body response, a freeze. Seeing this clearly gave Anita choices. She practised a different response: slower breath, softer shoulders, and the thumb-and-finger cue.",
        ],
      },
      {
        heading: "The appointment",
        body: [
          "With her permission, we spoke to her dentist, who agreed to a few adjustments: describing each step first, giving breaks on a raised-hand signal, and starting with a short visit just to sit in the chair. Anita visited twice without any treatment. On the third visit the dentist completed the work using normal local anaesthetic.",
          "Anita used her self-hypnosis throughout. It didn’t replace anaesthesia or the dentist’s skill. It meant she wasn’t fighting herself on top of everything else. Her verdict afterwards was “boring, which is exactly what I wanted”.",
        ],
      },
    ],
    pull: "I heard everything. I just stopped caring about the noise.",
    takeaways: [
      "Hypnosis is focused, deeply relaxed attention, not loss of control.",
      "You can stop at any time, and nothing is done without consent.",
      "It works best alongside, not instead of, medical or dental care.",
      "People differ in how responsive they are; that is normal.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "A major review of 49 meta-analyses covering 261 studies found that the most robust evidence for hypnosis was in patients undergoing medical procedures and in patients with pain. That is also where the approach is best studied, which is why we chose a procedure-related fear for this example.",
        "One well-known randomised trial in patients undergoing invasive medical procedures found that hypnotic relaxation reduced pain and anxiety compared with standard care. Brain-science reviews describe hypnosis as a real, measurable state of altered attention and suggestibility, not an illusion and not magic.",
        "Responsiveness varies from person to person, and a good practitioner explains this up front.",
      ],
      caveat:
        "Hypnosis may not be suitable for everyone, for example, people experiencing psychosis or certain severe conditions. A proper assessment comes first, and hypnotherapy does not replace medical treatment.",
    },
    references: [
      {
        text: "Rosendahl J, Alldredge CT, Haddenhorst A (2023). Meta-analytic evidence on the efficacy of hypnosis for mental and somatic health issues: a 20-year perspective. Frontiers in Psychology, 14.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38268815/",
      },
      {
        text: "Lang EV, et al. (2000). Adjunctive non-pharmacological analgesia for invasive medical procedures: a randomised trial. The Lancet, 355(9214), 1486–1490.",
      },
      {
        text: "Oakley DA, Halligan PW (2013). Hypnotic suggestion: opportunities for cognitive neuroscience. Nature Reviews Neuroscience, 14, 565–576.",
      },
    ],
  },
  {
    slug: "learning-to-live-alongside-the-pain",
    supportIndex: 7,
    area: "Elderly well-being & chronic pain",
    art: "elderly",
    title: "Learning to live alongside the pain: knees, loneliness and a morning walk",
    dek: "Mr Iyer’s osteoarthritis was only part of the picture. The pain, the quiet flat and the shrinking days were feeding each other.",
    readMinutes: 7,
    persona: {
      name: "Mr Raghunath Iyer",
      age: 72,
      line: "Retired bank manager and widower, Delhi. Osteoarthritis in both knees and a shrinking daily routine.",
    },
    snapshot: [
      {
        label: "What brought him in",
        value: "Persistent knee pain, low mood and growing isolation",
      },
      { label: "Format", value: "In-clinic, with weekly family video calls" },
      { label: "Sessions", value: "6 over about 8 weeks, alongside medical care" },
      {
        label: "Approach",
        value: "Relaxation, pain education, pacing, self-hypnosis, social activation",
      },
    ],
    sections: [
      {
        heading: "The knee was only part of it",
        body: [
          "Mr Iyer’s daughter in Toronto made the first call. She had noticed on their video chats that her father rarely left the flat. Since his wife’s passing two years earlier, he had also stopped his morning walks because of knee pain, and the days had slowly narrowed to the sofa, the television and the telephone.",
          "He was not dramatic about any of it. “At my age, what can one expect,” he said. But he admitted he was sleeping poorly and that the pain seemed worse when he was low.",
        ],
      },
      {
        heading: "Medical care stayed at the centre",
        body: [
          "We began by being clear about what we were not doing. His orthopaedic surgeon and physiotherapist remained in charge of his physical care, and his medicines stayed exactly as prescribed. Our role was complementary: to help with the emotional and psychological side of living with long-term pain, such as stress, worry, low mood, sleep and coping.",
          "With his permission, we also spoke to his physiotherapist so the plans fitted together.",
        ],
      },
      {
        heading: "Pain is real, and it is shaped by more than the knee",
        body: [
          "We explained, gently, that long-term pain is real and that the nervous system turns the volume up or down depending on stress, fear, sleep and attention. This isn’t saying the pain is “in the mind”. It simply means there are more levers than we thought.",
          "Mr Iyer relaxed visibly. He had been afraid that being told to relax meant he was being doubted.",
        ],
      },
      {
        heading: "Slow breathing and a place of comfort",
        body: [
          "In sessions we used slow breathing and guided hypnotic relaxation. Mr Iyer chose a memory: sitting on the steps of his village temple in the early morning, the stone cool under his hands. We built suggestions of coolness and ease around his knees, and recorded the session so he could use it daily.",
          "On bad days it didn’t erase the pain. He described it as turning it from “a shout to a murmur”. On better days it helped him fall asleep.",
        ],
      },
      {
        heading: "Pacing, not pushing, and company",
        body: [
          "Pain tends to produce a cycle of doing too much on good days and nothing on bad ones. With his physiotherapist’s agreement, we set a modest, steady walking plan: five minutes, with a rest, then gradually more. A neighbour in the building also walked in the mornings, and Mr Iyer joined him. Within a month there were four regular walkers and a tea stall.",
          "His daughter’s weekly video call became something to look forward to rather than a check-up. By the end he walked about twenty minutes most mornings. His pain on bad days was still real. What had changed was the distress around it, his sleep and the shape of his days.",
        ],
      },
    ],
    pull: "On bad days it turned the pain from a shout to a murmur.",
    takeaways: [
      "Pain care works best as a team: medical, physical and emotional support together.",
      "Fear, isolation and poor sleep can turn pain up. Addressing them can help.",
      "Pacing activity protects against the boom-and-bust cycle.",
      "Company and routine are part of treatment, not extras.",
    ],
    research: {
      heading: "What the research says",
      body: [
        "A widely cited review of clinical trials concluded that hypnosis is effective for reducing chronic pain, although outcomes vary between individuals, and that hypnotic treatment can have positive effects beyond pain control. A large umbrella review of hypnosis research likewise found pain to be one of the two areas with the most robust evidence.",
        "Social connection also matters. A large meta-analysis found that people with stronger social relationships had a substantially greater likelihood of survival, which is one reason we treated loneliness as part of the plan and not a side issue.",
        "We should be candid about limits. Most trials include adults of mixed ages, so evidence specifically in people over 70 is thinner, and benefits are not guaranteed for everyone.",
      ],
      caveat:
        "This support is complementary and does not replace medical care or pain treatment. New, sudden or worsening pain, or pain with other symptoms, needs prompt medical attention.",
    },
    references: [
      {
        text: "Jensen MP, Patterson DR (2014). Hypnotic approaches for chronic pain management: clinical implications of recent research findings. American Psychologist, 69(2), 167–177.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4465776/",
      },
      {
        text: "Rosendahl J, Alldredge CT, Haddenhorst A (2023). Meta-analytic evidence on the efficacy of hypnosis for mental and somatic health issues: a 20-year perspective. Frontiers in Psychology, 14.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38268815/",
      },
      {
        text: "Holt-Lunstad J, Smith TB, Layton JB (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine, 7(7), e1000316.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudyForSupportIndex(index: number) {
  return caseStudies.find((c) => c.supportIndex === index);
}

/** Slug of the case study for an Areas-of-support card (falls back to the first study). */
export function slugForSupportIndex(index: number): string {
  return (caseStudyForSupportIndex(index) ?? (caseStudies[0] as CaseStudy)).slug;
}

/** Previous/next studies in order, wrapping around, for the article footer. */
export function neighbours(slug: string): { prev: CaseStudy; next: CaseStudy } {
  const n = caseStudies.length;
  const i = Math.max(
    0,
    caseStudies.findIndex((c) => c.slug === slug),
  );
  const first = caseStudies[0] as CaseStudy;
  const prev = caseStudies[(i - 1 + n) % n] ?? first;
  const next = caseStudies[(i + 1) % n] ?? first;
  return { prev, next };
}

/* ---------------------------------------------------------------------------
 * Library organisation: reading paths, concern shortcuts and related studies.
 * Everything here points at the studies above by slug; counts are derived from
 * the real data, never hard-coded.
 * ------------------------------------------------------------------------- */

export type ReadingPath = { id: string; title: string; blurb: string; slugs: string[] };

export const readingPaths: ReadingPath[] = [
  {
    id: "settle-the-mind",
    title: "When your mind won’t settle",
    blurb:
      "Racing thoughts, a pounding heart and broken nights often belong together. Start here if worry follows you into the evening.",
    slugs: ["the-month-end-panic", "awake-at-3-am", "afraid-of-the-dental-chair"],
  },
  {
    id: "understand-yourself",
    title: "Understanding yourself",
    blurb:
      "Feelings you can’t name, a harsh inner voice and habits that won’t budge usually have a story behind them.",
    slugs: ["when-everything-feels-numb", "the-quiet-promotion-decline", "the-11-pm-scroll"],
  },
  {
    id: "closer-to-people",
    title: "Closer to the people in your life",
    blurb: "Relationships, family and loneliness, from a new marriage to the later years of life.",
    slugs: [
      "two-people-one-small-flat",
      "when-everything-feels-numb",
      "learning-to-live-alongside-the-pain",
    ],
  },
  {
    id: "how-hypnotherapy-works",
    title: "How clinical hypnotherapy actually works",
    blurb:
      "What a session feels like, and an honest look at where the evidence is strong and where it is mixed.",
    slugs: [
      "afraid-of-the-dental-chair",
      "awake-at-3-am",
      "learning-to-live-alongside-the-pain",
      "the-11-pm-scroll",
    ],
  },
];

/** "Start with what sounds like you": plain-language worries mapped to the best first read. */
export const concernShortcuts: { label: string; slug: string }[] = [
  { label: "I can’t switch off at night", slug: "awake-at-3-am" },
  { label: "My heart races and I don’t know why", slug: "the-month-end-panic" },
  { label: "I feel numb after a loss or big change", slug: "when-everything-feels-numb" },
  { label: "I doubt myself at work", slug: "the-quiet-promotion-decline" },
  { label: "We keep arguing about small things", slug: "two-people-one-small-flat" },
  { label: "I can’t break a habit", slug: "the-11-pm-scroll" },
  { label: "I’m afraid of a procedure", slug: "afraid-of-the-dental-chair" },
  { label: "Pain and loneliness are wearing us down", slug: "learning-to-live-alongside-the-pain" },
];

/** Studies featured in the teaser sections on other pages. */
export const featuredSlugs = [
  "the-month-end-panic",
  "awake-at-3-am",
  "the-quiet-promotion-decline",
  "afraid-of-the-dental-chair",
];

/** Hand-picked "keep reading" links, each with the reason the two stories connect. */
export const relatedStudies: Record<string, { slug: string; why: string }[]> = {
  "when-everything-feels-numb": [
    {
      slug: "the-quiet-promotion-decline",
      why: "Another story about learning to speak to yourself differently.",
    },
    { slug: "the-month-end-panic", why: "What happens when unspoken stress shows up in the body." },
    { slug: "learning-to-live-alongside-the-pain", why: "Loss, change and finding company again." },
  ],
  "the-month-end-panic": [
    { slug: "awake-at-3-am", why: "Anxiety often follows you to bed." },
    { slug: "afraid-of-the-dental-chair", why: "Hypnotic relaxation, seen up close." },
    { slug: "when-everything-feels-numb", why: "The other side of stress: feeling too little." },
  ],
  "awake-at-3-am": [
    { slug: "the-month-end-panic", why: "The racing mind behind many sleepless nights." },
    { slug: "the-11-pm-scroll", why: "The evening habit that quietly eats into sleep." },
    {
      slug: "afraid-of-the-dental-chair",
      why: "How a hypnotic recording actually works in practice.",
    },
  ],
  "the-quiet-promotion-decline": [
    { slug: "when-everything-feels-numb", why: "Naming what you feel, in small words." },
    { slug: "two-people-one-small-flat", why: "Saying what you need out loud, and kindly." },
    { slug: "the-11-pm-scroll", why: "Why shame makes habits harder, not easier." },
  ],
  "two-people-one-small-flat": [
    {
      slug: "the-quiet-promotion-decline",
      why: "Boundaries and self-worth start in the same place.",
    },
    { slug: "when-everything-feels-numb", why: "When the feeling underneath has no name yet." },
    {
      slug: "learning-to-live-alongside-the-pain",
      why: "Family and connection at another stage of life.",
    },
  ],
  "the-11-pm-scroll": [
    { slug: "awake-at-3-am", why: "The sleep side of the same evening pattern." },
    { slug: "the-month-end-panic", why: "Stress is often the job the habit is doing." },
    { slug: "the-quiet-promotion-decline", why: "Self-criticism and habits feed each other." },
  ],
  "afraid-of-the-dental-chair": [
    { slug: "the-month-end-panic", why: "Fear, the body’s alarm and how to work with it." },
    { slug: "awake-at-3-am", why: "Using a recorded session at home." },
    {
      slug: "learning-to-live-alongside-the-pain",
      why: "Hypnosis for pain, and its honest limits.",
    },
  ],
  "learning-to-live-alongside-the-pain": [
    { slug: "afraid-of-the-dental-chair", why: "More on what clinical hypnosis is, and isn’t." },
    { slug: "two-people-one-small-flat", why: "Family, closeness and being heard." },
    { slug: "awake-at-3-am", why: "Pain and sleep so often travel together." },
  ],
};

/** Turn a list of slugs into studies, silently dropping any that don’t exist. */
export function studiesFromSlugs(slugs: string[]): CaseStudy[] {
  return slugs.map((s) => getCaseStudy(s)).filter((s): s is CaseStudy => Boolean(s));
}

export function relatedFor(slug: string): { study: CaseStudy; why: string }[] {
  return (relatedStudies[slug] ?? []).flatMap(({ slug: s, why }) => {
    const study = getCaseStudy(s);
    return study ? [{ study, why }] : [];
  });
}

export function pathsFor(slug: string): ReadingPath[] {
  return readingPaths.filter((p) => p.slugs.includes(slug));
}

/** Real totals for the hub header, computed from the data above. */
export function libraryStats() {
  return {
    studies: caseStudies.length,
    minutes: caseStudies.reduce((sum, c) => sum + c.readMinutes, 0),
    references: caseStudies.reduce((sum, c) => sum + c.references.length, 0),
    paths: readingPaths.length,
  };
}
