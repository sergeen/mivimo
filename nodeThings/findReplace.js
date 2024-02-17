const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../p5/index.html'); // Update the path to your index.html file

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Global regex for all occurrences of href="xxxx"
  const hrefMatch = /href="([^"]*)"/g;
  const srcMatch = /src="([^"]*)"/g;
  
  // Create a copy of the original data to make modifications
  let modifiedData = data;

  let match;
  
  while ((match = hrefMatch.exec(data)) !== null) {
    const hrefContent = match[1];
    if (!hrefContent.includes('http')) {
      const modifiedHref = `/p5/${hrefContent}`;
      modifiedData = modifiedData.replace(`href="${hrefContent}"`, `href="${modifiedHref}"`);
      console.log(`Replaced: href="${hrefContent}" with href="${modifiedHref}"`);
    }
  }

  while ((match = srcMatch.exec(data)) !== null) {
    const srcContent = match[1];
    if (!srcContent.includes('http')) {
      const modifiedSrc = `/p5/${srcContent}`;
      modifiedData = modifiedData.replace(`src="${srcContent}"`, `src="${modifiedSrc}"`);
      console.log(`Replaced: src="${srcContent}" with src="${modifiedSrc}"`);
    }
  }

  // Write the modified data back to the file
  fs.writeFile(filePath, modifiedData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error(`Error writing file: ${writeErr}`);
    } else {
      console.log('File successfully updated!');
    }
  });
});
