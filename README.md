# Three JS Abschlussprojekt

Abschlussprojekt im Modul **Computergrafik** mit Schwerpunkt **Grafik im Browser mit WebGL**

**Abgabetermin:** 13.09.2021 - 17:00 Uhr

**Aktuelle Version:** [Vorschau](https://three-js-abschlussprojekt.web.app/)

### Akzeptanzkriterien

- [ ] Mindestens zwei Objekte in einer kleinen Szene darstellen und bewegen.
- [ ] Die Anwendung muss „modernes OpenGL“ mit Vertex- und Fragment-Shader enthalten
- [ ] Import von 3D-Objekten aus anderen Anwendungen (z.B. Blender, Cinema 4D, 3ds Max) testen und dokumentieren

## Kurzbeschreibung

Abbildung von Planeten im Weltall und ein Model eines Raumschiffes, welches auf einem Planeten landet. Interaktiv soll
die Kameraposition und die Zeit sein. Die Szene soll nicht beeinflusst werden können.

### Zusammenfassung als ToDos
- [ ] Abbildung von Planeten im Weltall
- [ ] Abbildung eines Raumschiffes
- [ ] Animation der Planeten
- [ ] Animation des Raumschiffes
- [ ] Steuerung der Zeit durch vor- und zurückspulen der Animation
- [ ] Kamera frei bewegbar machen

## Entwicklungsumgebung

- IDE: Visual Studio Code
- Deployment: `firebase deploy` mit [Firebase](https://firebase.google.com/)
- Hosting: [Three JS Abschlussprojekt](https://three-js-abschlussprojekt.web.app/)

## Quellen

- [Lichter](https://threejsfundamentals.org/threejs/lessons/threejs-lights.html)

# Einrichtung

- [Node](https://nodejs.org/en/) installieren(wenn nicht vrhanden)
- Firebase installieren: `npm install -g firebase-tools`
- Projekt starten: `firebase serve`
- Das Projekte sollte jetzt [hier](http://localhost:5000/) aufrufbar sein

# - - - - Notizen - - - -

# Umlaufbahn Versionen

## V1 Eltern-Kind-Gruppierung (wird genutzt)

Elternelement rotieren um position der Kindelemente zu verändern. PROBLEM: Zwei Kindelemente würden sich immer gleich
bewegen und ein unnatürliches Solarsystem erzeugen.

## V2 Drehpunkt-Referenz

"Kindelement" bekommt eine Referenz auf das "Elternelement" und verwaltet einen Drehpunkt an der Stelle des "
Elternelements".

# Model laden

Das Laden vom Mesh per GLB-Datei war mit dem GLTF-Loader kein Problem. Texturen und animationen komplett zu laden ist
jedoch eine Herausforderung.

# Umgebung

- start: `npx http-server`
- build: `webpack`
- deploy: `firebase deploy`
