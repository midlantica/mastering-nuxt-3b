export default defineEventHandler((event) => {
  const { lessonSlug, chapterSlug } = event.context.params
  return `Lesson "${lessonSlug}" in chapter "${chapterSlug}"`
})
