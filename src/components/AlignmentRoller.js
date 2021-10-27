export const AlignmentRoller = () => {
  let alignments = ["Chaotic", "Neutral", "Lawful"];

  return alignments[Math.floor(Math.random() * alignments.length + 1)];
};
