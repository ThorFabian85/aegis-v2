# Aegis V2

A standalone webpage for **Axiom of Ontological Caution V2**, by Thor Fabian Pettersen. It has its own editorial identity within the Reversent family: ink-blue surfaces, ice-blue accents, a typographic opening, serif emphasis, and a quiet reading layout.

## Preview

Extract this package and open `index.html` in your browser. Keep `styles.css`, `script.js`, `assets`, and `downloads` beside it. Nothing needs to be installed or built.

The separate `Aegis-V2-Preview.html` download is also a complete, self-contained version. Download it and open it in your browser to preview the page, navigation, conversation note, and Word download.

## Publish as a separate GitHub Pages website

1. Create or open the repository you want to use for this page, for example `aegis-v2`.
2. Upload the **contents** of the extracted `aegis-v2` folder to the repository root. `index.html` should be directly in that root, alongside `styles.css`, `script.js`, the two asset folders, and `.nojekyll`.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the branch containing these files, typically **main**, and the **/(root)** folder. Save.
5. Open the website address shown in the Pages settings once deployment finishes.

GitHub's official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Add the page inside your existing Reversent website

Upload the entire `aegis-v2` folder to the existing repository. This keeps the current Reversent homepage and its other files intact. The new page will be inside the `aegis-v2/` subfolder of that website. You can then add a navigation link to `aegis-v2/` from your existing homepage.

For this option, keep your existing GitHub Pages configuration.

## Files

- `index.html` — the complete V2 webpage and its metadata.
- `styles.css` — the responsive desktop, tablet, phone, and print design.
- `script.js` — reading-position navigation and the back-to-top behavior.
- `assets/reversent-mark.png` — the mark supplied in Reversent v4.5.
- `assets/development-conversation.png` — your supplied screenshot, inside an expandable development note.
- `downloads/Axiom-of-Ontological-Caution-V2.docx` — an unchanged copy of your supplied Word document.
- `.nojekyll` — tells GitHub Pages to serve the static files directly.

## Content and behavior

The complete body of the supplied V2 Word document is preserved. The requested philosophical introduction and “Preserve the possibility of discovering that you are wrong” appear prominently at the top.

Back links point to https://thorfabian85.github.io/reversent/. The source-publication and conversation links point to your supplied Substack posts.

The page uses local assets, system fonts, and ordinary HTML, CSS, and JavaScript. There are no external scripts, analytics, font services, package dependencies, or build steps. The text, section links, downloads, and expandable conversation note remain usable without JavaScript. Reduced-motion preferences disable smooth scrolling.

This revision replaces the previous ring and particle animation with a distinct editorial layout. The original Reversent mark, dark colour family, and restrained navigation maintain the connection to Reversent. The conversation screenshot is presented as development context.

To edit the wording, change `index.html`. To change the appearance, edit `styles.css`. Keep the section IDs and their navigation links consistent.

## Verification

The complete source body and section headings were checked against the uploaded Word document. All local images, downloads, and section links resolve, and the JavaScript passes a syntax check. The bundled Word file is unchanged.

A rendered browser check could not be completed in the build environment. Please open the preview before publishing to check the appearance in your browser.
