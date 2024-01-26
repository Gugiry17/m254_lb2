# Prozessbeschreibung Youniqeu

<p align="center">
<img src="images/logo.8e059b73.svg" alt="image" width="300" height="auto">
</p>

## Contributers

- Lenny Angst
- Micha Baumann
- Denys Zimmerann

## Auftragstellung

In einer einfachen Business Prozess Applikation soll die Camunda Workflow Engine eingebunden werden. Der Prozess wird im Modeler BPMN grafisch definiert. Die Architektur
der Applikation soll so aufgebaut werden, dass für unterschiedliche Kunden eigene
Userinterface in verschiedenen Technologien implementiert werden können, jedoch einen standardisierte Prozessabbildung (Camunda) verwendet werden kann. Das Gateway Interface übersetzt die Aktionen im User Interface in das Camunda API Format und
umgekehrt. Es sollen die Technischen Möglichkeiten (HTML, JAVAClass, Workflow
BPMN Engine) von Camunda ausgenutzt werden.
Der Prozess beinhaltet unterschiedliche Arten von Task , z.B. User Task, Service Task, etc.

Die Interaktion mit der Workflow Engine erfolgt über das REST API (GateWay).

### Zielsetzung

Standardisierte Business Prozess nach unterschiedlichen Kundenspezifikationen umsetzen können.

### Resultat

1. Dokument mit folgenden Inhalten
    - Titelblatt, Inhaltsverzeichnis, Kopf-/Fusszeile
    - Zielsetzung (wozu dient der Geschäftsprozess, was soll mit ihm erreicht werden)
    - Kurze textliche Beschreibung des Geschäftsprozesses
    - textliche Beschreibung der im Prozess vorkommenden Begriffe grafische
Darstellung mit BPMN / DMN
2. BPMN-Datei (XML)
3. Beschreibung Gate Way Implementierung
4. Implementierte Software Komponenten (HTML Forms, Javascript, GUI Design, etc.)
5. Lauffähig in der Camunda BPM Plattform
6. Test Cases (Anwendungsfälle)
7. Beschreibung Vorgehensplan und Problemlösungen
8. Live Präsentation der Resultate (ca. 5-8 Minuten)

## Einführung

Wir arbeiten alle zusammen gemeinsam beim Migros-Genossenschafts-Bund. Es gibt bei uns im Betrieb eine interne Lernendenfirma für die nur lernende arbeiten. Im letzten Halbjahr gab es dort eine Prozessumstrukturierung und der neue Arbeitsprozess musste festgehalten werden. Da wir genau zum Zeitpunkt der neuen Prozesseinführung das Camunda Modul hatten, dachten wir, dass dies ein gutes Tool sei, um den neuen Prozess festzuhalten, sodass er für alle verständlich ist. Da immer wieder neue Lernende in den Migros-Genossenschafts-Bund eintretten müssen wir auch immer wieder neue Lernende in die Arbeitsprozesse von Younique einführen. So können wir den festgehaltenen Prozess gut brauchen, um die neuen Lernenden zu schulen und ihnen unsere abläufe aufzuzeigen.

## Schriftliche prozessbeschreibung

Die Lernendenfirma ist Auftrags abhängig, somit sind wir angewiesen auf Aufträge. Diese Aufträge erhalten wir von Mitarbeitern (in unserem Fall der Kunde) aus dem Migros-Genossenschafts-Bund. Diese haben drei Möglichkeiten einen Auftrag bei uns einzureichen:

1. Sie können über unsere Webseite im Auftragsformular einreichen

Wenn sich nun der Kunde dazu entschliesst den Auftrag über unsere Webseite einzugeben, so werden die wichtigsten Informationen im Formular abgefragt und anschliessend wird eine E-Mail an das Younique Postfach gesendet.

2. Sie können ein E-Mail an uns versenden, indem sie ihren Auftrag erklären

Somit landet die Mail direkt im Postfach und wird von dort aus weiter verarbeitet

3. Sie können direkt auf uns Lernende zukommen und uns mündlich von ihrem Auftrag erzählen

Der Lernende geht anschliessend auf die Webseite und füllt, mit seinen Informationen, das Auftragsformular aus.

<img align="left" src="images/5a81af7d9123fa7bcc9b0793.png" alt="image" width="100" height="auto">
<br>
Achtung unser Prozess beschrieb, bildet nur die Youniqeu interne Seite ab und somit nur die schritte ab erhalt eines Auftrages auf der Webseite.
<br clear="left"/>

Hier ist der korrigierte Text:

Sobald der Auftrag nun im Onlineformular auf der Webseite eingetragen wurde, wird eine E-Mail erstellt, in der die wichtigsten Informationen für den Auftrag enthalten sind:

- Vorname
- Nachname
- E-Mail
- Projektname
- Projektbeschreibung
- Deadline

Sobald eine E-Mail im Postfach ist, kümmert sich das Ressourcenmanagement darum, dass der Auftrag im Microsoft Planner eingetragen wird.

Im nächsten Schritt wird die Eignung des Auftrags geprüft. Hierbei geht es vor allem darum, ob der Lernende (Bro/Sis) davon profitieren und dazulernen könnte. Falls dies nicht der Fall ist, wird der Auftrag abgelehnt, und das Ressourcenmanagement versendet eine Absage-E-Mail. Ist der Auftrag geeignet, wird nun geschaut, ob wir verfügbare Ressourcen haben. Wenn wir keine Lernenden finden, die Zeit haben, einen Auftrag abzuarbeiten, wird ebenfalls eine E-Mail zur Absage des Auftrags versendet.

Wenn sich jemand findet, der den Auftrag übernimmt, wird der Auftrag an den Bro/Sis übergeben, und dieser ist nun für den Auftrag zuständig. Falls mehrere Bros/Sis' im Auftrag involviert sein sollten, ist die erste Aufgabe, einen Lead zu bestimmen. Dieser führt den Auftrag und wird die Hauptansprechperson für den Auftraggeber. Anschließend müssen erst einmal administrative Aufgaben erledigt werden. Der Auftrag muss in der Buchhaltungsliste eingetragen werden.

Als nächstes steht der Austausch mit dem Auftraggeber (Kunde) an. Hierbei wird der Auftrag nochmals von vorne bis hinten durchgesprochen, und alle anstehenden Fragen werden gestellt, sodass die Bros/Sis' bestmöglich mit ihrem Auftrag beginnen können. Aus diesem Gespräch werden natürlich die wichtigsten Punkte festgehalten. Sobald dies gemacht ist, geht es los an die Auftragsbearbeitung.

Die Bros/Sis' arbeiten am Auftrag und versuchen, ihn so gut wie möglich zu lösen. Während der Bearbeitung stehen sie im stetigen Austausch mit dem Kunden, um mögliche Probleme oder Fehler möglichst früh zu erkennen und zu beheben. Dieser Schritt wiederholt sich, bis der Auftrag abgeschlossen ist und der Kunde zufrieden mit dem Ergebnis ist.

Ist ein Auftrag abgeschlossen, passieren zwei Dinge gleichzeitig:

1. Die Finanzabteilung wird über den Abschluss des Auftrages informiert.

Diese tragen anschließend den Abschluss in ihre Liste ein.

2. Das Produkt des Auftrages wird an den Kunden übergeben.

Nach der Abgabe an den Kunden sollte die Buchhaltungsliste noch einmal vervollständigt werden. Sobald dies getan ist, wird ein Feedbackformular an den Kunden gesendet, in dem er die abgegebene Arbeit und die Bros/Sis' bewerten kann.

Diese Bewertung wird ebenfalls an die Finanzabteilung weitergeleitet. Anschließend füllt die Finanzabteilung mit den gesammelten Informationen noch die Belohnungsliste aus. Sobald dies getan ist, ist der ganze Bearbeitungsprozess eines Auftrages zu Ende.

## Begriffbeschreibung

Begriff | Beschreibung
-------- | --------
MS Planner | Microsoft Planner
Bro/Sis | Ein Lehrling im Migros-Genossenschafts-Bund
Kunde | Mitarbeiter aus dem Migros-Genossenschafts-Bund
Task | Eine Kachel im Microsoft Planner worin der ganze Auftrag getrackt wird und die wichtigsten Informationen festgehalten werden
Belohnungsliste | Da das Bearbeiten der Aufträge nicht obligatorisch für die Lernenden ist, haben wir einen Ansporn geschaffen, damit sie eine kleine Motivation haben einen Auftrag zu erledigen. Beim Abschluss erhalten sie je nach Auftrag eine gewisse Anzahl Punkte. Beim Erreichen einer gewissen Punktzahl gibt es ein kleines Geschenk.

## Grafische Darstellung BPMN

<p align="center">
<img src="images/younique 1.png" alt="image" width="auto" height="auto">
</p>

## Gate-Way Beschreibung

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
if(suitable){
    ja() 
} else {
    nein() 
}
```
</td>
        </tr>
        <tr>
        <td>Ressourcen frei?</td>
        <td>
                 In diesem Gate-Way wird überprüft, ob Ressourcen frei sind. Das Gate-Way funktioniert wie ein If Else Statement. Falls Ressourcen vorhanden sind, geht er bei Ja weiter, falls nicht bei nein.

```js
if(ressourcesAvailable){
    ja() 
} else {
    nein() 
}
```
</td>
        </tr>
        <tr>
        <td>Bro/Sis gefunden</td>
        <td>
                 In diesem Gate-Way wird überprüft, ob ein Lernender Zeit und Lust hat, den Auftrag zu übernehmen. Das Gate-Way funktioniert wie ein If Else Statement. Falls der Lernende zusagt, geht er bei Ja weiter, falls nicht bei nein.

```js
if(broFound){
    ja() 
} else {
    nein() 
}
```
</td>
        </tr>
        <tr>
        <td>Auftrag Fertig?</td>
        <td>
                In diesem Gate-Way wird überprüft, ob der Auftrag abgeschlossen ist. Das Gate-Way funktioniert wie ein If Else Statement. Falls der Auftrag fertig ist, geht er bei Ja weiter, falls nicht bei nein.

```js
if(done){
    ja() 
} else {
    nein() 
}
```
</td>
        </tr>
        <tr>
        <td>Finanzen über Abschluss informieren</td>
        <td>
                Dies ist ein Parallel Gate-Way hier spaltet sich der Prozessablauf in zwei einzelne Prozesse, die gleichzeitig laufen
</td>
        </tr>
         <tr>
        <td>Wieder zusammenführung der beiden Paralell laufenden Prozesse</td>
        <td>
                Dies ist ein Parallel Gate-Way laufen die zwei einzelnen Prozesse wieder zusammen.
        </td>
        </tr>
    </tbody>
</table>
