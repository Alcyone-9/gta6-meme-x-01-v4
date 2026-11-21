# GTA VI Players Are Still Down There — a make.fun meme (v4)

A two-panel poster about GTA VI's launch week: up top, players crowd a Leonida pool insisting they are "just here for the realistic graphics" while their hearts drift to Mandy — the Pipework side character who out-trended protagonist Lucia within a day of launch. Below the "ENJOYING REALISTIC GRAPHICS" divider, one player has been enjoying them so long he is now a skeleton on a deck chair at the bottom of the sea, controller still in hand. The make.fun ghost floats beside him holding a BOUNTY PAID receipt — because on make.fun, unlike in Leonida, the bounties pay real money.

![make.fun rank](https://make.fun/api/badges/repos/Alcyone-9/gta6-meme-x-01-v4/rank.svg)
![make.fun reward](https://make.fun/api/badges/repos/Alcyone-9/gta6-meme-x-01-v4/reward.svg)
![make.fun](https://make.fun/api/badges/makefun.svg)

## Concept

The context is the community's own running joke from GTA VI's 19 Nov 2026 launch: Mandy, a side character from the early "Pipework" mission who never appeared in a single trailer, became more discussed than Lucia (one Complex post passed 37M views in hours), and male players posting pool screenshots of her and Lucia kept claiming they were only admiring the realistic graphics — usually next to the classic skeleton-on-a-chair-underwater image. This entry keeps that exact context but redraws it entirely as original flat vector art: the two characters appear only as labelled silhouette frames (MANDY bigger, with a gold crown; LUCIA smaller and plain), three player silhouettes in the pool aim their hearts and binoculars at Mandy, and the underwater half pays the joke off with the skeleton gamer. The make.fun ghost — drawn as the official mark, large, with its star badge — holds a "BOUNTY PAID" receipt, and the post text carries the @makefunai tag, the play code, and the bounty link. No Rockstar art, no screenshots, no traced likenesses.

## Files

- `meme.svg` — the hand-written vector artwork (1080×1080).
- `meme.png` — the rendered 1080×1080 PNG that goes in the X post.
- `post-text.txt` — the exact X post text (275 characters).
- `main.ts` — reads `post-text.txt` and writes `POST.json`, verifying the text byte-for-byte and enforcing the 280-character limit.
- `POST.json` — the post record (`text`, `image`, `url`); the URL is a placeholder until the real post exists.
- `.makefun/owner.json` — the make.fun wallet that owns this entry.
- `PENILAIAN.md` — an honest self-grading against the seven judging criteria.
- `LICENSE` — MIT.
