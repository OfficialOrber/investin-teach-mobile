# investin-teach-mobile 🚀

This is a starter phone app you can make your own. You run it on your **own phone** by scanning
a QR code — no app store, no Apple account, no waiting for anything to build.

---

## What you need

Three things:

1. **A computer** — Windows, Mac, Linux or a Chromebook all work.
2. **Node.js** — this is the program that runs the code on your computer.
   Download the version marked **LTS** (it means "the safe one") from
   [nodejs.org](https://nodejs.org/) — the LTS version is always new enough.
   To check what you already have, type `node --version` in a terminal.
   You need **v20.19 or newer**.
3. **The Expo Go app on your phone** — this is what actually shows your app.
   - iPhone / iPad → [Expo Go on the App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android → [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

> **New word:** a **terminal** is a window where you type commands instead of clicking things.
> On Windows use "PowerShell" or "Command Prompt", on a Mac use "Terminal",
> and in VS Code use the menu **Terminal → New Terminal**.

---

## Get it running

Click the green **Use this template** button at the top of this page to make your own copy,
then download it to your computer (**Code → Download ZIP**, or `git clone` it if you know how).

Now open a terminal **in the project folder** and type these three commands, one at a time:

```bash
cd investin-teach-mobile
npm install
npx expo start
```

The first one moves into the folder. The second one downloads the pieces the app is built from
(it takes a minute or two, and it only has to happen once). The third one starts the app.

A big **QR code** will appear in your terminal. Now:

- **iPhone:** open the normal Camera app, point it at the QR code, tap the link that pops up.
- **Android:** open the **Expo Go** app, tap *Scan QR code*, point it at the QR code.

Your app opens on your phone. 🎉

> Leave that terminal running the whole time you are working. It is what feeds the app to your
> phone. When you are finished, press `Ctrl` + `C` in the terminal to stop it.

---

## Change your first thing

1. Open the file **`src/config/app.ts`**.
2. Find the line that says `name: 'My First App',`
3. Change the words inside the quote marks to whatever you want.
4. **Save the file** (`Ctrl` + `S`, or `Cmd` + `S` on a Mac).
5. **Look at your phone.** It changed by itself. You did not have to restart anything.

That is called **hot reloading**, and it is the best part. Change something, save, look at your
phone. Over and over. That is how you build an app.

Now try changing `emoji` and `tagline` in the same file.

---

## Where everything lives

```
investin-teach-mobile/
│
├── app/                      ← every file in here is a SCREEN you can see
│   ├── _layout.tsx             the wrapper around the whole app (sets up colours)
│   ├── (tabs)/                 the three tabs along the bottom
│   │   ├── _layout.tsx         builds the tab bar itself
│   │   ├── index.tsx           🏠 Home screen — the counter (teaches state)
│   │   ├── list.tsx            📝 List screen — add/delete + saving (teaches lists)
│   │   └── about.tsx           ℹ️  About screen (teaches reading another file)
│   └── item/
│       └── [id].tsx            opens when you tap a row in the list
│
├── src/                      ← everything that is NOT a screen
│   ├── config/
│   │   └── app.ts            👋 START HERE — your app's name, emoji, tagline
│   ├── theme/
│   │   ├── tokens.ts           all the colours and sizes live here
│   │   └── ThemeProvider.tsx   hands those colours to every screen
│   └── components/ui/         the building blocks you make screens out of
│       ├── Button.tsx          a button
│       ├── Card.tsx            a box with a border
│       ├── Input.tsx           a box you can type in
│       ├── Screen.tsx          the edges of a screen (avoids the notch)
│       └── Text.tsx            words
│
├── assets/                   ← pictures and app icons
├── app.json                  ← app settings (name, icon, dark mode)
└── package.json              ← the list of pieces the app is built from
```

The folder names with brackets look strange, and that is on purpose:

- `(tabs)` — the round brackets group screens into the tab bar without showing up in the address.
- `[id]` — the square brackets mean "this bit changes". `/item/1` and `/item/2` both open that file.

---

## Try these

Work down the list. They get harder as you go.

1. **Make it yours.** In `src/config/app.ts`, change `name`, `tagline` and `emoji`.
2. **Count by 2.** In the same file, change `counterStep` from `1` to `2`. Tap + on the Home
   screen and watch it go 0, 2, 4, 6...
3. **Change the colour.** In `src/theme/tokens.ts`, find `brand: '#4f46e5'` and swap it for
   another colour code — try `'#e11d48'` (pink-red) or `'#16a34a'` (green). Every button changes
   at once. ([Find colour codes here.](https://htmlcolorcodes.com/))
4. **Add a fact.** On the About screen (`app/(tabs)/about.tsx`) there is a list called
   `builtWith`. Add another line to it.
5. **Add a new field.** In `src/config/app.ts` add `favouriteFood: 'pizza',` then show it on the
   About screen with `<Text>{app.favouriteFood}</Text>`.
6. **Clear all.** Add a "Clear all" `Button` to the List screen that empties the whole list.
   *Hint: you want `setItems([])`.*
7. **Stop at zero.** Make the Home counter refuse to go below 0, so the − button does nothing
   when the count is already 0. *Hint: `if (count === 0) return;`*
8. **Add a fourth tab.** Make a new file `app/(tabs)/jokes.tsx` that copies the shape of
   `about.tsx`, then add a matching `<Tabs.Screen name="jokes" ... />` to
   `app/(tabs)/_layout.tsx`. Pick an icon name from
   [the icon directory](https://icons.expo.fyi/).

---

## When it breaks

Things breaking is normal. It happens to everybody who writes code. Here is what to do.

### The QR code won't scan, or the app is stuck on "Loading..."

Your phone and your computer **must be on the same Wi-Fi network**. Check that first — this is
the problem about nine times out of ten. Phone data (4G/5G) will not work.

### ...and if that still doesn't work, use `--tunnel`

**Read this bit — for a lot of students this is the only thing that works.**

Stop the terminal (`Ctrl` + `C`) and start it again like this instead:

```bash
npx expo start --tunnel
```

This sends your app out through the internet instead of across your Wi-Fi, so your phone can
always reach it. It is a little slower, and that is fine.

You will need this if:

- **you are at school or college** — school and college Wi-Fi almost always blocks devices from
  talking to each other, even when they are on the same network;
- **you are on a Chromebook** — a Chromebook's Linux container cannot be reached over the local
  network at all, so `--tunnel` is the *only* way;
- **you are on a guest or public network**, or your laptop firewall is blocking things.

If the first command asks to install a package called `@expo/ngrok`, say yes.

### A red error screen on my phone

Read the top line — it usually names the file and the line number where you made a mistake.
Fix it, save, and then **shake your phone** and tap **Reload**. (Shaking opens the Expo Go menu.)

### My changes aren't showing up

Save the file first (an unsaved file in VS Code has a dot • next to its name). If it still
won't update, stop the terminal and clear the cache:

```bash
npx expo start -c
```

The `-c` means "clear the leftovers". This fixes a surprising number of weird problems.

### "Project is incompatible with this version of Expo Go"

Your Expo Go app is out of date. Go to the App Store or Google Play and **update Expo Go**,
then scan the QR code again.

### `npx: command not found`, or `npm install` fails

Node.js either is not installed or is too old. Type `node --version` — if that errors, or the
number is lower than `v20.19`, install the **LTS** version from
[nodejs.org](https://nodejs.org/) and then **close and reopen your terminal**.

---

## For teachers

Built on **Expo SDK 57**, which is the SDK the current App Store / Play Store build of Expo Go
runs. Everything used here is bundled into Expo Go, so there is no native build step, no Xcode,
no Android Studio, no Apple Developer account and no API keys. Setup is `npm install` and
`npx expo start`.

State is deliberately kept to `useState` and `AsyncStorage` — no data-fetching or form libraries —
so students only meet ideas they can see on screen.

Useful commands:

```bash
npx expo start --tunnel   # when the local network is blocked (school Wi-Fi, Chromebooks)
npx expo start -c         # clear the cache
npm run lint              # check code style
npx tsc --noEmit          # check for type mistakes
npx expo-doctor           # check the project set-up is healthy
```
