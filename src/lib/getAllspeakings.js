// import glob from 'fast-glob';
// import * as path from 'path';

// async function importspeaking(speakingFilename) {
//   try {
//     let { meta, default: component } = await import(
//       `../pages/speakings/${speakingFilename}`
//     );
//     return {
//       slug: speakingFilename.replace(/(\/index)?\.mdx$/, ''),
//       ...meta,
//       component,
//     };
//   } catch (error) {
//     console.error(`Failed to import ${speakingFilename}:`, error);
//     return null; // Return null or handle the error as needed
//   }
// }

// export async function getAllspeakings() {
//   try {
//     let speakingFilenames = await glob(['*.mdx', '*/index.mdx'], {
//       cwd: path.join(process.cwd(), 'src/pages/speakings'),
//     });

//     let speakings = await Promise.all(speakingFilenames.map(importspeaking));

//     // Filter out null values (in case of import errors)
//     speakings = speakings.filter(speaking => speaking !== null);

//     return speakings.sort((a, z) => new Date(z.date) - new Date(a.date));
//   } catch (error) {
//     console.error('Failed to get all speakings:', error);
//     return [];
//   }
// }
