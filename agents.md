# AI Agenter Dokumentasjon

Dette dokumentet beskriver hvordan AI-agenter kan brukes til å assistere med utvikling i dette Cursor Workshop-prosjektet.

## Oversikt

Dette prosjektet er designet for å fungere med AI-assisterte utviklingsverktøy som Cursor. Kodebasen følger mønstre som gjør det enkelt for AI-agenter å forstå og modifisere.

## Prosjektstruktur

```
cursor-workshop/
├── frontend/          # Next.js-applikasjon
├── backend/           # Express API-server
└── micros/            # Micro-frontends (navbar, footer)
```

## Agent-vennlige Mønstre

### Kode-stil

- **Pilfunksjoner**: Bruk alltid pilfunksjoner og ES6+ syntaks
- **TypeScript**: Full typesikkerhet på tvers av alle pakker
- **Konsistent Navngiving**: Klare, beskrivende navn for komponenter og funksjoner

### Komponentarkitektur

- **Komponentorganisering**: Komponenter er organisert i mapper med `index.tsx` og `styled.tsx` filer
- **Typedefinisjoner**: Typer er definert i separate `types.tsx` filer når nødvendig
- **Styled Components**: Bruker Emotion for styling med separasjon av bekymringer

## Vanlige Agent-oppgaver

### 1. Legge til Nye Funksjoner

Agenter kan hjelpe med å implementere nye funksjoner ved å:
- Opprette nye komponenter som følger eksisterende mønstre
- Legge til API-endepunkter i backend
- Integrere micro-frontends når nødvendig

**Eksempel på Forespørsel:**
```
Legg til en ny blogginnlegg-detaljside på /blog/[slug] som viser fullt innleggsinnhold
```

### 2. Refaktorering

Agenter kan refaktorere kode samtidig som de opprettholder:
- Typesikkerhet
- Eksisterende funksjonalitet
- Konsistent kode-stil

**Eksempel på Forespørsel:**
```
Refaktorer innleggskort-komponenten for å bruke et mer moderne layout
```

### 3. Feilrettinger

Agenter kan hjelpe med å identifisere og fikse problemer:
- Typefeil
- Runtime-feil
- Logikkfeil
- Styling-problemer

**Eksempel på Forespørsel:**
```
Fiks API-klienten for å håndtere feil riktig
```

### 4. Testing

Agenter kan hjelpe med å legge til tester:
- Enhetstester for komponenter
- Integrasjonstester for API-endepunkter
- E2E-tester for brukerflyter

## Utviklingsarbeidsflyter

### Starte Utvikling

```bash
# Installer avhengigheter
npm install

# Start alle tjenester
npm run dev

# Eller start individuelt
npm run dev:frontend
npm run dev:backend
```

### Legge til Avhengigheter

Når agenter legger til nye avhengigheter:
1. Legg til i den aktuelle `package.json` (root, frontend, backend, eller micros)
2. Kjør `npm install` for å oppdatere lock-fil
3. Importer og bruk i kode

### Opprette Nye Komponenter

Agenter bør følge denne strukturen:

```
ComponentName/
├── index.tsx      # Hovedkomponentlogikk
├── styled.tsx     # Styled components (hvis du bruker Emotion)
└── types.tsx      # TypeScript-typer (hvis nødvendig)
```

## API-integrasjon

### Backend-endepunkter

Backend tilbyr RESTful API-er:
- `GET /api/posts` - List alle innlegg
- `GET /api/posts/:slug` - Hent enkelt innlegg
- `GET /api/tags` - Hent alle tags
- `GET /api/health` - Helse-sjekk

### Frontend API-klient

Lokalisert i `frontend/src/clients/api.ts`, denne klienten håndterer:
- API-forespørsler
- Feilhåndtering
- Type-sikre responser

## Micro-Frontend Arkitektur

Prosjektet bruker micro-frontends for:
- **Navbar** (`micros/navbar-web`)
- **Footer** (`micros/footer-web`)

Agenter som jobber med micro-frontends bør:
- Opprettholde versjonerte komponenter (`v1/`, `v2/`, osv.)
- Beholde demo-sider for testing
- Følge de samme komponentstruktur-mønstrene

## Beste Praksis for Agenter

1. **Les før Skriving**: Les alltid eksisterende filer for å forstå mønstre
2. **Typesikkerhet**: Oppretthold TypeScript-typer gjennom hele prosjektet
3. **Konsistens**: Følg eksisterende kode-stil og mønstre
4. **Testing**: Vurder å legge til tester for nye funksjoner
5. **Dokumentasjon**: Oppdater relevant dokumentasjon når du legger til funksjoner

## Vanlige Mønstre

### React-komponenter

```typescript
import React from 'react';
import { styled } from '@emotion/react';

const Container = styled.div`
  // stiler her
`;

export const MyComponent = () => {
  return (
    <Container>
      {/* komponentinnhold */}
    </Container>
  );
};
```

### API-endepunkter

```typescript
app.get('/api/endpoint', (req, res) => {
  // handler-logikk
  res.json({ data: 'response' });
});
```

### Typedefinisjoner

```typescript
export interface MyType {
  id: string;
  name: string;
}
```

## Feilsøking

### Vanlige Problemer

1. **Typefeil**: Sørg for at alle typer er riktig importert og definert
2. **Moduloppløsning**: Sjekk workspace-konfigurasjon i root `package.json`
3. **Portkonflikter**: Backend kjører på 3001, frontend på 3000

### Få Hjelp

Når agenter møter problemer:
1. Sjekk eksisterende kode for lignende mønstre
2. Gjennomgå TypeScript-feil nøye
3. Sørg for at avhengigheter er installert
4. Verifiser workspace-konfigurasjon

## Fremtidige Forbedringer

Agenter kan hjelpe med å implementere:
- Autentiseringssystem
- Admin-panel
- Søk og filtrering
- Relaterte innlegg-funksjon
- Bildeopplasting
- Kommentarsystem
- SEO-forbedringer

Se `README.md` for detaljerte oppgavebeskrivelser.
