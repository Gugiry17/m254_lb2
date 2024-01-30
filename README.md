# Prozessbeschreibung Younique

<p align="center">
<img src="images/logo.8e059b73.svg" alt="image" width="300" height="auto">
</p>

## Contributors

- Lenny Angst
- Micha Baumann
- Denys Zimmerann

## Auftragstellung

In einer einfachen Business Prozess Applikation soll die Camunda Workflow Engine
eingebunden werden. Der Prozess wird im Modeler BPMN grafisch definiert. Die
Architektur der Applikation soll so aufgebaut werden, dass für unterschiedliche
Kunden eigene Userinterface in verschiedenen Technologien implementiert werden
können, jedoch einen standardisierte Prozessabbildung (Camunda) verwendet werden
kann. Das Gateway Interface übersetzt die Aktionen im User Interface in das
Camunda API Format und umgekehrt. Es sollen die Technischen Möglichkeiten (HTML,
JAVAClass, Workflow BPMN Engine) von Camunda ausgenutzt werden.

Der Prozess beinhaltet unterschiedliche Arten von Tasks, z.B. User Task, Service
Task, etc. Die Interaktion mit der Workflow Engine erfolgt über die REST API
(GateWay).

### Zielsetzung

Standardisierte Business Prozesse nach unterschiedlichen Kundenspezifikationen
umsetzen können.

### Resultat

1. Dokument mit folgenden Inhalten
   - Titelblatt, Inhaltsverzeichnis, Kopf-/Fusszeile
   - Zielsetzung (wozu dient der Geschäftsprozess, was soll mit ihm erreicht
     werden)
   - Kurze textliche Beschreibung des Geschäftsprozesses
   - textliche Beschreibung der im Prozess vorkommenden Begriffe grafische
     Darstellung mit BPMN / DMN
2. BPMN-Datei (XML)
3. Beschreibung Gate Way Implementierung
4. Implementierte Software Komponenten (HTML Forms, Javascript, GUI Design,
   etc.)
5. Lauffähig in der Camunda BPM Plattform
6. Test Cases (Anwendungsfälle)
7. Beschreibung Vorgehensplan und Problemlösungen
8. Live Präsentation der Resultate (ca. 5-8 Minuten)

## Einführung

Wir drei Lernende arbeiten alle gemeinsam beim Migros-Genossenschafts-Bund. Es
gibt bei uns im Betrieb eine interne Lernendenfirma «Younique», welche von
Lernenden gegründet sowie auch geführt wird. Im letzten Halbjahr gab es dort
eine Prozessumstrukturierung und der neue Arbeitsprozess musste festgehalten
werden. Da wir genau zum Zeitpunkt der neuen Prozesseinführung das Camunda Modul
hatten, dachten wir, dass dies ein gutes Tool sei, um den neuen Prozess
festzuhalten, sodass der interne Prozess für alle verständlich ist. Da immer
wieder neue Lernende beim Migros-Genossenschafts-Bund die Lehre antreten, müssen
wir auch immer wieder neue Lernende in die Arbeitsprozesse von Younique
einführen. So können wir den festgehaltenen Prozess gut brauchen, um die neuen
Lernenden zu schulen und ihnen unsere Abläufe aufzuzeigen.

## Schriftliche Prozessbeschreibung

Die Lernendenfirma ist auf Aufträge angewiesen. Diese Aufträge erhalten wir von
Mitarbeitern (in unserem Fall der Kunde) aus dem Migros-Genossenschafts-Bund,
der Migros Fachmarkt AG und der Migros Supermarkt AG. Diese haben drei
Möglichkeiten einen Auftrag bei uns einzureichen:

1. Sie können über unsere Webseite und unser Auftragsformular ihren Wunsch
   äussern.\
   Wenn sich nun der Kunde dazu entschliesst den Auftrag über unsere Webseite einzugeben,
   so werden die wichtigsten Informationen in einem einfachen Formular abgefragt
   und anschliessend wird eine E-Mail an das Younique Postfach gesendet.

2. Sie können ein E-Mail an uns versenden, indem sie ihren Auftrag erklären.\
   Somit landet die Mail direkt im Postfach und wird von dort aus weiter verarbeitet.
   Hierbei tragen wir den Aufrag selbstständig in das Auftragsformular ein, um es
   einheitlich zu halten.

3. Sie können direkt auf uns Lernende zukommen und uns mündlich von ihrem
   Auftrag erzählen.\
   Der Lernende geht anschliessend auf die Webseite und füllt mit seinen Informationen
   das Auftragsformular aus.

> [!NOTE]
>
> Unser Prozessbeschrieb bildet nur die Schritte ab Auftragseingang auf der
> Website ab. Die Schritte vor dem Auftragseingang werden nicht abgebildet, da
> diese nicht in unserem Aufgabenbereich liegen.

Im Formular werden folgende Informationen abgefragt:

- Vorname
- Nachname
- E-Mail
- Projektname
- Projektbeschreibung
- Deadline

Sobald der Auftrag nun im Onlineformular auf der Webseite eingetragen wurde,
wird eine Bestätigungs-E-Mail an den Kunden versandt. Zudem erhält das
Ressource-Management eine E-Mail, dass ein neuer Auftrag eingegangen ist.

Sobald eine E-Mail im Postfach ist, kümmert sich das Ressource-Management darum,
dass der Auftrag im Microsoft Planner eingetragen wird.

Im nächsten Schritt wird die Eignung des Auftrags geprüft. Hierbei geht es vor
allem darum, ob der Lernende (Bro/Sis) davon profitieren und dazulernen kann.
Falls dies nicht der Fall ist, wird der Auftrag abgelehnt, und das
Ressourcenmanagement versendet eine Absage-E-Mail. Ist der Auftrag geeignet,
wird nun geschaut, ob wir verfügbare Ressourcen haben. Wenn wir keine Lernenden
finden, welche genügend Kapazität und Zeit haben, einen Auftrag abzuarbeiten,
wird ebenfalls eine E-Mail zur Absage des Auftrags versendet.

Wenn jemand gefunden wird, der den Auftrag übernimmt, wird der Auftrag an den
Lernenden (Bro/Sis) übergeben, welcher nun für den Auftrag zuständig ist. Falls
mehrere Bros/Sis' im Auftrag involviert sein sollten, ist die erste Aufgabe,
einen Lead zu bestimmen. Dieser führt den Auftrag und wird die
Hauptansprechsperson für den Auftraggeber. Anschliessend müssen erst einmal
administrative Aufgaben erledigt werden. Der Auftrag muss in der
Buchhaltungsliste eingetragen werden.

Als Nächstes steht der Austausch mit dem Auftraggeber (Kunde) an. Hierbei wird
der Auftrag nochmals von vorne bis hinten durchgesprochen, und alle anstehenden
Fragen werden gestellt, sodass die Bros/Sis' bestmöglich mit ihrem Auftrag
beginnen können. Aus diesem Gespräch werden natürlich die wichtigsten Punkte
festgehalten. Sobald dies gemacht ist, geht es los an die Auftragsbearbeitung.

Die Bros/Sis' arbeiten am Auftrag und versuchen, ihn so gut wie möglich zu
lösen. Während der Bearbeitung stehen sie im stetigen Austausch mit dem Kunden,
um mögliche Probleme oder Fehler möglichst früh zu erkennen und zu beheben.
Dieser Schritt wiederholt sich, bis der Auftrag abgeschlossen ist und der Kunde
zufrieden mit dem Ergebnis ist.

Ist ein Auftrag abgeschlossen, passieren zwei Dinge gleichzeitig:

1. Die Finanzabteilung wird über den Abschluss des Auftrages informiert. Diese
   tragen anschliessend den Abschluss in ihre Liste ein.
2. Das Produkt oder die Dienstleistung des Auftrages wird an den Kunden
   übergeben.

Nach der Abgabe an den Kunden sollte die Buchhaltungsliste noch einmal
vervollständigt werden. Sobald dies getan ist, wird ein Feedbackformular an den
Kunden gesendet, in dem er die abgegebene Arbeit und die Bros/Sis' bewerten
kann.

Diese Bewertung wird ebenfalls an die Finanzabteilung weitergeleitet.
Anschliessend füllt die Finanzabteilung mit den gesammelten Informationen noch
die Belohnungsliste aus. Sobald dies getan ist, ist der ganze
Bearbeitungsprozess eines Auftrages zu Ende.

## Begriffbeschreibung

| Begriff         | Beschreibung                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MS Planner      | Microsoft Planner. Dort haben wir einen Überblick über alle Aufträge.                                                                                                                                                                                                                                                          |
| Bro/Sis         | Ein Lehrling im Migros-Genossenschafts-Bund                                                                                                                                                                                                                                                                                    |
| Kunde           | Mitarbeiter aus dem Migros-Genossenschafts-Bund                                                                                                                                                                                                                                                                                |
| Task            | Eine Kachel im Microsoft Planner worin der ganze Auftrag getrackt wird und die wichtigsten Informationen festgehalten werden.                                                                                                                                                                                                  |
| Belohnungsliste | Da das Bearbeiten der Aufträge nicht obligatorisch für die Lernenden ist, haben wir einen Ansporn geschaffen, damit sie eine kleine Motivation haben einen Auftrag zu erledigen. Beim Abschluss erhalten sie je nach Auftrag eine gewisse Anzahl Punkte. Beim Erreichen einer gewissen Punktzahl gibt es ein kleines Geschenk. |

## Grafische Darstellung BPMN

<p align="center">
<img src="images/younique 1.png" alt="image" width="auto" height="auto">
</p>

### Gateway Beschreibung

<table>
    <thead>
        <th>Gateway</th>
        <th>Beschreibung</th>
    </thead>
    <tbody>
        <tr>
            <td>Auftrag geeignet?</td>
            <td>
               In diesem Gate-Way wird überprüft, ob der Auftrag einen Mehrwert für den Lernenden hat. Das Gate-Way funktioniert wie ein If Else Statement. Falls er geeignet ist, geht er bei Ja weiter, falls nicht bei nein.

```js
if (suitable) {
	ja();
} else {
	nein();
}
```

</td>
        </tr>
        <tr>
        <td>Ressourcen frei?</td>
        <td>
                 In diesem Gate-Way wird überprüft, ob Ressourcen frei sind. Das Gate-Way funktioniert wie ein If Else Statement. Falls Ressourcen vorhanden sind, geht er bei Ja weiter, falls nicht bei nein.

```js
if (ressourcesAvailable) {
	ja();
} else {
	nein();
}
```

</td>
        </tr>
        <tr>
        <td>Bro/Sis gefunden</td>
        <td>
                 In diesem Gate-Way wird überprüft, ob ein Lernender Zeit und Lust hat, den Auftrag zu übernehmen. Das Gate-Way funktioniert wie ein If Else Statement. Falls der Lernende zusagt, geht er bei Ja weiter, falls nicht bei nein.

```js
if (broFound) {
	ja();
} else {
	nein();
}
```

</td>
        </tr>
        <tr>
        <td>Auftrag Fertig?</td>
        <td>
                In diesem Gate-Way wird überprüft, ob der Auftrag abgeschlossen ist. Das Gate-Way funktioniert wie ein If Else Statement. Falls der Auftrag fertig ist, geht er bei Ja weiter, falls nicht bei nein.

```js
if (done) {
	ja();
} else {
	nein();
}
```

</td>
        </tr>
        <tr>
        <td>Finanzen über Abschluss informieren</td>
        <td>
                Dies ist ein Parallel Gate-Way. Hier spaltet sich der Prozessablauf in zwei einzelne Prozesse, die gleichzeitig laufen.
</td>
        </tr>
         <tr>
        <td>Zusammenführung der beiden Paralell laufenden Prozesse</td>
        <td>
                Dies ist ein Parallel Gate-Way. Hier laufen die zwei einzelnen Prozesse wieder zusammen.
        </td>
        </tr>
    </tbody>
</table>

## Schnittstelle Camunda <=> Website

Das Auftragsformular läuft extern auf einer simplen Website, die wir mit
SvelteKit erstellt haben. Beim Absenden des Auftrages wird direkt eine
POST-Request mit allen Feldern an die Camunda REST API gesendet.

Diese SvelteKit-Website agiert gleichzeitig auch als Backend für den
E-Mail-Versand. Mittels einer Camunda-Library können wir hier auf die
verschiedenen Topics aus unserem BPMN-Prozess lauschen. Der E-Mail-Versand
erfolgt schliesslich über einen externen SMTP-Server.

## Testcases

### Testfall: Auftragseingabe in einem Formular

**Ziel:** Überprüfen Sie, ob das System korrekt und effektiv
Auftragsinformationen über ein Formular entgegennimmt.

**Vorbedingungen:**

1. Der Benutzer hat Zugriff auf die Younique Webseite.

**Schritte:**

1. Öffnen Sie die Webseite
2. Füllen Sie alle erforderlichen Felder mit gültigen Daten aus.
3. Klicken Sie auf die Schaltfläche "Absenden".

**Erwartete Ergebnisse:**

- Das Formular enthält alle erforderlichen Felder.
- Das System akzeptiert gültige Eingaben und speichert die Auftragsinformationen
  korrekt.
- Das System erkennt und behandelt ungültige Eingaben angemessen.
- Die gespeicherten Daten sind korrekt und können später erfolgreich abgerufen
  werden.

### Testfall: Auftragswertung

**Ziel:** Überprüfen, ob ein Auftrag geeignet ist für die Bearbeitung durch
Younique.

**Vorbedingungen:**

1. Auftrag wurde eingegeben
2. Auftrag wurde abgespeichert

**Schritte:**

1. Durchlesen des Auftrages.
2. Überprüfen des Absenders.
3. Checken des Datums.
4. Bewertung, ob der Auftrag geeignet ist oder nicht.

**Erwartete Ergebnisse:**

- Falls der Auftrag nicht geeignet ist sollte der Auftrag abgelehnt und ein
  entsprechendes E-Mail versandt werden.
- Falls der Auftrag geeignet ist, sollte der Auftrag angenommen werden und der
  nächste Schritt eingeleitet werden.

## Reflexion

Die Erfahrungen der letzten 10 Tage mit Camunda waren äusserst lehrreich und
haben uns die Möglichkeit geboten, das Modul von Grund auf zu erlernen und erste
Schritte in der praktischen Anwendung zu machen. Unser dreiköpfiges Team hat
bedeutende Fortschritte gemacht und wertvolle Einblicke in die
Geschäftsprozessautomatisierung gewonnen. Die Lernkurve war steil, und wir haben
ein solides Verständnis für die Grundlagen von Camunda entwickelt.

Die Zusammenarbeit im Team war entscheidend. Durch den regelmässigen
Ideenaustausch und die gemeinsame Arbeit konnten wir voneinander lernen und
Herausforderungen gemeinsam bewältigen. Dies stärkte nicht nur die Teamdynamik,
sondern förderte auch den Wissensaustausch.

Wir haben während des Projekts Herausforderungen und Fehler gemeinsam
identifiziert und erfolgreich behoben. Dies half uns, ein tieferes Verständnis
für potenzielle Schwierigkeiten bei der Arbeit mit Camunda zu entwickeln.

Nach den ersten 10 Tagen sind wir von den vielfältigen Anwendungsmöglichkeiten
von Camunda überzeugt. Das Tool hat das Potenzial, komplexe Geschäftsprozesse zu
automatisieren und zu optimieren, und wir sehen optimistisch in die Zukunft.

Insgesamt war die Erfahrung mit Camunda äusserst positiv und produktiv. Wir
haben nicht nur eine neue Fähigkeit erworben, sondern auch ein solides Fundament
gelegt, um Camunda effektiv in zukünftigen Projekten einzusetzen. Dieser
Lernprozess hat nicht nur unsere individuellen Fähigkeiten verbessert, sondern
auch die Zusammenarbeit und den Wissensaustausch innerhalb unseres Teams
gestärkt. Wir freuen uns darauf, das Gelernte weiter zu vertiefen und in der
Praxis umfassender einzusetzen.
