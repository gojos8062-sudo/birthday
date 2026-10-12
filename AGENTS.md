<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Content data
All personalizable site content lives in src/data/birthdayData.ts so the owner can edit everything in one place.

## Entrance gate
The entrance answer is checked by a server function against the SITE_PASSWORD secret, so it never ships in client code.
