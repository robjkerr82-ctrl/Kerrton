# Second Wind — Private Intake Interview

A static, local-first conversational website for collecting the information needed to design two separate injury-aware fitness programs and one shared motivation experience.

## Participant experience

1. Open the participant-specific link.
2. Confirm the privacy and medical boundary.
3. Speak with a text-based interview that changes expert perspective as the topic changes.
4. Answer one question at a time and receive relevant follow-up questions.
5. Pause and resume on the same trusted device when local autosave is enabled.
6. Review and edit the structured case-conference summary.
7. Export an encrypted response packet.
8. Upload that packet into the private project chat and provide its passphrase separately.

## Profile links

When deployed at a website URL:

- Participant A: `/?profile=participant-a`
- Participant B: `/?profile=participant-b`

The query parameter highlights the intended profile. The participant must still confirm the privacy boundary and choose their profile.

## Interview perspectives

- Intake Coordinator
- Medical Safety Lead
- Physiotherapy and Injury Lead
- Accredited Exercise Physiology Lead
- Strength and Conditioning Coach
- Dietitian and Weight-Management Lead
- Swimming Coach
- Cycling and Commute Coach
- Recovery and Behaviour Coach
- Product, Accessibility and Privacy Lead

The roles are evidence-informed app personas. They are not treating clinicians and do not diagnose, treat or provide medical clearance.

## Scope

The interview covers:

- informed consent and immediate safety screening;
- medical history, medications and current clinical support;
- a repeatable interview for each injury or painful body area;
- back-specific warning symptoms;
- current daily function and movement confidence;
- personal goals and program boundaries;
- opt-in weight management and nutrition context;
- eating-disorder and unsafe-restriction safeguards;
- previous training and return-to-exercise barriers;
- strength preferences and program logistics;
- swimming and cycling-to-work requirements;
- a repeatable equipment catalogue;
- sleep, stress, recovery and difficult-day planning;
- buddy sharing, motivation and competition boundaries;
- devices, accessibility, notifications and offline use;
- final unknowns and questions for clinicians.

There are 154 core questions. Branching, multiple injuries and equipment entries can expand the active interview to approximately 200 questions. Optional questions can be skipped.

## Privacy model

- No account or server database.
- No cookies, analytics, advertising or third-party scripts.
- Unfinished answers use browser `localStorage` only after the participant approves local autosave.
- The site never sends responses automatically.
- Recommended export uses AES-GCM-256 encryption.
- The encryption key is derived with PBKDF2-SHA256 and 310,000 iterations.
- The passphrase is not stored and cannot be recovered.
- Plain JSON export is available only after a warning.
- Medical response packets must never be committed to the website repository.

Local browser storage is convenient, not equivalent to an encrypted medical-record system. Participants should use a private device and clear the local draft when finished.

## Local preview

Serve the folder with a static server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/?profile=participant-a
http://localhost:8000/?profile=participant-b
```

Modern browsers require a secure context for Web Crypto in many deployment situations. Production deployment should use HTTPS. GitHub Pages provides HTTPS for its generated site.

## Static hosting

The folder can be published without a build step on:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- any HTTPS static web host

Only these runtime files are required:

- `index.html`
- `styles.css`
- `questions.js`
- `app.js`

## Response handoff

The encrypted export has this outer structure:

```json
{
  "format": "second-wind-encrypted-intake",
  "version": "1.0",
  "algorithm": "AES-GCM-256",
  "kdf": "PBKDF2-SHA256",
  "iterations": 310000,
  "salt": "...",
  "iv": "...",
  "ciphertext": "..."
}
```

After decryption, the structured handoff contains:

- participant profile;
- completion metadata;
- safety and professional-review flags;
- a case-conference snapshot;
- question IDs, prompts, expert roles and answers;
- a simplified answer object for app-design processing;
- source and privacy metadata.

## Safety references

The prototype’s cautious language and flags are informed by:

- Australian Government 24-hour movement guidelines for adults;
- Australian Government recommendations for people with chronic conditions;
- Healthdirect low-back-pain and back-injury guidance;
- Healthdirect weight and waist-circumference guidance;
- OAIC guidance on collecting sensitive information.

These references inform the interview boundary; they do not turn the website into a clinical service.
