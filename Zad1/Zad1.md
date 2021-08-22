1. Rozgrzewka html

Wskaż błędy w poniższym kodzie. Odpowiedź uzasadnij.
```
1 <div id=”idik1” class=”klasa1 klasa2”>lorem</div>
2 <input name=”pole1”></input> 
3 <div id=”idik1” class=”klasa3”>ipsum</div>
4 <div id=”idik2” class=”klasa4” class=”klasa5”>dolor amet</div>
5 <p>tekst</br>akapitu<p>zagnieżdzony P</p></p>
```
Odp. 
* dwa elementy posiadają ten sam identyfikator "idik1", nie powinno tak być, identyfikatory powinny być unikalne, dany id musi być zerezerwowany tylko dla jednego elementu html
* input jest znacznikiem samozamykającym się: ```<input />```, nie posiada więc tagu zamykającego. Powinien mieć 
też określony atrybut type, powinien mieć towarzyszący mu tag ```<label for="">...</label>``` będący etykietą dla inputa, aby oba tagi logicznie ze sobą powiązać input powinien posiadać też atrybut id="" z nazwą identyczną jak w atrybucie for znacznika```<label>```. Jeśli etykieta nie jest potrzebna wizualnie można ją ukryć, ale dla użytkowników czytników ekranowych będzie pomocny.
* tag ```<div>``` jest przeznaczony do grupowania elementów, które nie posiadają żadnego znaczenia 
semantycznego, w przeciwnym wypadku powinno się zastosować dedykowane znaczniki  
* zduplikowany atrybut class (linia 4), nie powtarzamy atrybutów w danym tagu
* nie istnieje tag ```</br>```, znacznik ```<br />``` jest samozamykający, wymusza złamanie linii tekstu i przechodzi do następnej linii
* nie powinno się zagnieżdżać tagów```<p>```w innych tagach```<p>```, akapit powinien zawierac tekst, a nie inny akapit