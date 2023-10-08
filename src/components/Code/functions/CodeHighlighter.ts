const CodeHighlighter = (code : string) => {
  const lineOfCode = code.split('\n')

  const codigo = code.replace(/>/g, '&#62;')
    .replace(/  /g, '&nbsp;')
    .replace(/(['"].*?['"])/g, string =>
      `<span class="string">${string}</span>`
    ).replace(/\n/g, match =>
      `<p class="lineCode">${match}</p>`
    ).replace(/(function|return|const|let|var|if|else|for|while|console.log|import|export)/g, match =>
      `<span class="vars">${match}</span>`
    )
  console.log(codigo);

  return { code: codigo, lineOfCode }
}

export default CodeHighlighter;