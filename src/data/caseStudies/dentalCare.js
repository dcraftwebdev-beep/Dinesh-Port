// Case study: Dr. Amin's Dental Care — clinic website with online booking
// Scripted showcase recordings (tools/showcase) cropped to the site area
const DEMO = 1680 / 926;
const URL = 'dr-amins.netlify.app';

export default {
  intro:
    'I designed and developed a website for Dr. Amin’s Dental Care. It’s a calm, reassuring experience that helps new patients get to know the clinic and book an appointment online in a few simple steps.',
  cover: {
    theme: 'blush',
    media: {
      type: 'video',
      src: '/projects/dental-care/tour-demo.mp4',
      poster: '/projects/dental-care/tour-demo-poster.webp',
      url: URL,
      ratio: DEMO,
    },
  },
  facts: [
    { label: 'Role', value: 'Design & Frontend Development' },
    { label: 'Client', value: 'Dr. Amin’s Dental Care' },
    { label: 'Year', value: '2025' },
    { label: 'Platform', value: 'Clinic website + online booking' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Making the dentist feel less intimidating',
      body: [
        'Many people feel anxious about visiting a dentist. The website needed to feel friendly and professional at the same time. It had to answer questions quickly, build trust in the doctors and make booking an appointment effortless.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Book Appointment first', text: 'The primary action sits in the header and the hero, so booking is always one click away.' },
            { title: 'Call in one tap', text: 'A dedicated call button helps patients who prefer to speak to someone.' },
            { title: 'Reassuring copy', text: '“Pain-free treatments and compassionate care” addresses the biggest worry up front.' },
          ],
        },
      ],
    },
    {
      id: 'walkthrough',
      nav: 'Walkthrough',
      eyebrow: 'Walkthrough',
      title: 'Building trust, section by section',
      body: [
        'Patients choose a dentist they trust. The homepage introduces the clinic’s approach, explains the care on offer, puts real faces to the team and lets other patients do the talking.',
      ],
      blocks: [
        {
          type: 'media',
          browser: {
            type: 'video',
            src: '/projects/dental-care/tour-demo.mp4',
            poster: '/projects/dental-care/tour-demo-poster.webp',
            url: URL,
            ratio: DEMO,
          },
          caption: 'Homepage tour: about, services, why choose us, the specialists and patient reviews.',
        },
        {
          type: 'insights',
          items: [
            { title: 'Meet the doctors', text: 'Profiles for each specialist (orthodontist, implant surgeon, pediatric and general dentist) with their focus areas.' },
            { title: 'Social proof', text: 'The Google rating and real patient reviews sit right where visitors start to decide.' },
            { title: 'Clear care approach', text: 'Specialised expertise, end-to-end care and a technology-driven approach explained in plain language.' },
            { title: 'Always a next step', text: 'Every section ends close to a booking or contact action.' },
          ],
        },
      ],
    },
    {
      id: 'booking',
      nav: 'Booking',
      eyebrow: 'Online booking',
      title: 'Booking an appointment in three simple steps',
      body: [
        'I built a guided, multi-step booking flow so patients can go from “I need a check-up” to a confirmed slot without calling the clinic.',
      ],
      blocks: [
        {
          type: 'media',
          browser: {
            type: 'video',
            src: '/projects/dental-care/booking-demo.mp4',
            poster: '/projects/dental-care/booking-demo-poster.webp',
            url: `${URL}/booking`,
            ratio: DEMO,
          },
          caption: 'The booking flow. Pick a treatment, watch the summary update, choose a date and time, then add your details.',
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Select a service', text: 'Treatments grouped into General, Cosmetic, Surgery and Orthodontics, each with duration and price.' },
            { title: 'Live booking summary', text: 'The doctor, treatment, location and fees update instantly as choices are made, so there are no surprises.' },
            { title: 'Pick a date & time', text: 'A clean calendar makes choosing an available day quick and clear.' },
            { title: 'Confirm details', text: 'A final step captures the patient’s details to complete the booking.' },
          ],
        },
      ],
    },
    {
      id: 'details',
      nav: 'Details',
      eyebrow: 'Details',
      title: 'Calm colours, confident typography',
      body: [
        'A soft blue palette signals cleanliness and trust, while large serif headlines give the clinic a premium, editorial feel. Transparent pricing in rupees and clear progress steps keep the booking experience honest and stress-free.',
      ],
    },
  ],
};
