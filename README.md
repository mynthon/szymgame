```
engine = new Sz_Engine_Engine('very_unique_name')
engine._root.addChild(new Sz_App_Pi_Npc('Dziwak'));
engine._root.addChild(new Sz_App_Pi_Boo('Boo'));
engine.start()
engine._root
```


```
engine = new Sz_Engine_Engine('very_unique_name')
engine._root.addChild(new Sz_App_Pi_Map('mainmap'));
engine._root.qr_mainmap.addChild(new Sz_App_Pi_Npc('Dziwak'));
engine._root.qr_mainmap.addChild(new Sz_App_Pi_Boo('Boo'));
engine._root.qr_mainmap.drawMaze()
engine.start()
engine._root.qr_mainmap.$

```



 * quark
   * height()
   * width()
   * x()
   * X()
   * y()
   * Y()
   * Class static
   * Class dynamic
   * Class root (special, not extendable)