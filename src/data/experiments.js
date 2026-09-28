// Interaction lab: live micro interaction demos shown on the Experiments page.
// `demo` matches a key in components/experiments/lab/index.js
export const experiments = [
  { demo: 'magnetic', hint: 'Hover', title: 'Magnetic button', text: 'The button leans toward your cursor, and its label moves a little further for depth.', tags: ['React', 'Pointer events'] },
  { demo: 'spotlight', hint: 'Hover', title: 'Spotlight card', text: 'A soft light and a glowing border follow your cursor across a dark card.', tags: ['CSS variables', 'Masks'] },
  { demo: 'tilt', hint: 'Hover', title: '3D tilt card', text: 'The card tilts toward your cursor in 3D, with a glossy highlight sliding across it.', tags: ['3D transforms', 'React'] },
  { demo: 'scramble', hint: 'Hover', title: 'Text scramble', text: 'Letters shuffle through random glyphs, then decode one by one into the next word.', tags: ['React state', 'Timers'] },
  { demo: 'like', hint: 'Click', title: 'Like burst', text: 'The heart pops, bursts into particles and the counter rolls to its new value.', tags: ['Keyframes', 'SVG'] },
  { demo: 'odometer', hint: 'Click', title: 'Rolling odometer', text: 'Every digit is a strip of numbers that rolls into place with a slight stagger.', tags: ['CSS transitions'] },
  { demo: 'tabs', hint: 'Click', title: 'Sliding tabs', text: 'A pill glides and resizes to the active tab with a gentle spring.', tags: ['Layout measuring', 'Spring easing'] },
  { demo: 'deck', hint: 'Drag', title: 'Swipe deck', text: 'Throw the top card away and it returns to the back of the stack.', tags: ['Drag physics', 'Pointer capture'] },
  { demo: 'marquee', hint: 'Hover', title: 'Skills marquee', text: 'Two endless rows of tools drift in opposite directions and pause on hover.', tags: ['CSS animation', 'Masks'] },
];
