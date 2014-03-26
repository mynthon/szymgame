```
engine = new Sz_Engine_Engine('very_unique_name')
engine._root.addChild(new Sz_App_Pi_Npc('Dziwak'));
engine._root.addChild(new Sz_App_Pi_Boo('Boo'));
engine.start()
engine._root
```


```
engine = new Sz_Engine_Engine('very_unique_name')
engine._root.addChild(new Sz_App_Pi_Npc('mainmap'));
engine._root.qr_mainmap.addChild(new Sz_App_Pi_Npc('Dziwak'));
engine._root.qr_mainmap.addChild(new Sz_App_Pi_Boo('Boo'));
engine.start()
engine._root.qr_mainmap.drawMaze()
engine._root
```