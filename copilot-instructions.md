# Copilot Instructions: Kodestil for MyTaste Frontend

Dette dokumentet beskriver kodestilen og beste praksis som skal følges i dette prosjektet. Følg disse retningslinjene for å sikre konsistens og lesbarhet i koden.

## Generelle prinsipper
- **TypeScript** skal brukes for alle filer (bruk `.ts` og `.tsx`).
- **React**-funksjonskomponenter benyttes, med hooks for tilstand og sideeffekter.
- Koden skal være **modulær** og **gjenbrukbar**.
- Bruk **ES6+**-syntaks (const, let, arrow functions, destructuring, etc.).
- Unngå duplisering av kode.

## Fil- og mappestruktur
- Del opp koden i logiske mapper: `components/`, `pages/`, `api/`, `context/`, `mocks/`, `assets/`, `resources/`.
- En komponent per fil.
- Navngi komponentfiler med stor forbokstav, f.eks. `Header.tsx`.
- Type-definisjoner samles i `types.ts`.

## Importer
- Bruk relative imports innenfor `src/`.
- Gruppér imports: eksterne pakker først, deretter interne moduler.
- Unngå wildcard-importer (`import * as ...`).

## Funksjoner og variabler
- Bruk **const** som standard, **let** kun hvis nødvendig.
- Navngi variabler og funksjoner beskrivende og på engelsk.
- Funksjoner skal være rene og små.
- Unngå magiske tall og strenger – bruk konstanter fra `constants.ts`.

## Typing
- All kode skal være typesikret med TypeScript.
- Bruk eksplisitte typer for props, state og funksjonsparametre.
- Bruk `interface` eller `type` for komplekse objekter.

## React-spesifikt
- Funksjonskomponenter skrives som arrow functions.
- Props og state skal typesikres.
- Bruk hooks (`useState`, `useEffect`, etc.) fremfor klasser.
- Unngå sideeffekter i render-funksjonen.

## API-kall
- API-kall håndteres i `api/`-mappen.
- Bruk egne handler-funksjoner for GET/POST/PUT/DELETE.
- Feilhåndtering og loading-state skal støttes.

## Kommentarer og dokumentasjon
- Kommenter kun der det er nødvendig for forståelse.
- Bruk JSDoc for komplekse funksjoner.
- Skriv på engelsk i kode og kommentarer.

## Stiling
- Bruk CSS-moduler, ikke bruk styled components eller inline styles på ny kode. 

## Formatering og linting
- Følg prosjektets ESLint- og Prettier-regler.
- Indenter med 2 mellomrom.
- Maks linjelengde: 100 tegn.
- Unngå trailing whitespace.

## Testing og mock-data
- Bruk mock-data fra `mocks/` for utvikling og testing.
- Skriv enkle enhetstester der det er hensiktsmessig.

## Vanlige "best practices"
- Unngå "any"-typen.
- Ikke legg inn sensitive data i repoet.
- Skriv kode som er lett å utvide og vedlikeholde.

---

**Oppsummering:**
Følg disse retningslinjene for å sikre at koden er konsistent, lesbar og enkel å vedlikeholde. 

