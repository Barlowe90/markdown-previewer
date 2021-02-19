import { useState } from "react";
import Bagde from "react-bootstrap/Badge";
let marked = require("marked");

function App() {
  const placeholder = `# Markdown Previewer

[![Markdown Previewer]( "Markdown Previewer")]()

## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front end libraries to build a markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

\`\`\`                      
   <p>Hello world! This is HTML CODE BLOCK.</p>          
\`\`\``;
  const [texto, setTexto] = useState(placeholder);

  function createMarkup() {
    return { __html: marked(texto) };
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col text-center">
          <h1>Markdown Previewer</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="col text-center">
            <h2>Editor</h2>
            <textarea
              id="editor"
              autoFocus
              className="input"
              rows="10"
              cols="35"
              value={texto}
              onChange={(e) => {
                setTexto(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col text-center">
            <h2>Preview</h2>
          </div>
          <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
}

export default App;
