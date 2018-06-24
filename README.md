# AutoTrimps + Zek

## Discussion / Discord Channel
<a href="https://discord.gg/Ztcnfjr"><img src="https://png.icons8.com/color/180/discord-new-logo.png" width=48></a>
Discord is a chat program. Come to talk about AutoTrimps, for help, or suggestions for new features : https://discord.gg/Ztcnfjr (Shhhh)

## Current Version (full changes below) - Ongoing Development!
- Too many to list
- This version has beta changes by Zek, forked from GenBTC + Kfro. Including Autostance 3, Update to Swiffy Overlay, and Merging of buttons. Please tell me about bugs on Discord

Zek - New changes will be posted here^

- Mar 24, BATTLECALC CHANGES:
- BattleCalc.js - getBattleStats() updated for the stuff added to AutoStance 1 a while ago, Life,C2,StillRowing, Copied from game code.
- Mar 24, EQUIPMENT CHANGES:
- Equip.js - Now supports higher cap numbers such as 200. Lower cap for liquified and overkilled zones:
- If a zone is liquified its 10% of your cap.
- If its a quick zone that you might complete in under 25 seconds its also 10% of your cap (based on last zone).
- hidden variable MODULES["equipment"].capDivisor = 10;   //number to divide your normal cap by
- Spire is explicitly leveled to your full 100% cap.
- Also above MaxMapBonusAfterZone the armor equip is leveled to full cap as well, as an attempt to get more Armor (working on it).
- Sorry for any bugs or undocumenteds in the meantime.
- Old Original Zeker450 AutoPerk Preset was changed 2 days ago without notice also. This is your notice That is now called #2, And there is a new one called #3 That it his latest change.
- v2.1.6.5-stable - Mar 24, Set up <a href='https://genbtc.github.io/AutoTrimps-stable'>Stable Repository</a> for the faint of heart. Equipment changes, see README at <a href='https://github.com/genbtc/AutoTrimps/blob/gh-pages/README.md'>GitHub</a> and check commit history; Sorry for any breakages.
- v2.1.6.9 - March 23, New: AutoMaps setting combined with RunUniqueMaps. Be advised, the variable has changed from boolean false,true to a value 0,1,2. Settings file has been migrated as such. New: Map SpecialMod is extremely beta and can break your game. Geneticist Infinity fixed. New AGU Settings for 60% Void. Graphs fixes. AutoMaps changes. Equipment level cap improvements.
- v2.1.6.8 - March 22, Settings GUI, make better. Up/Down graph buttons. Warning notices on import/export. Internal code fixes, gameplay unchanged.
- v2.1.6.7 - March 20, Moved all the Settings around on you :) Enjoy the new layout. Display Tab: EnhanceGrid + Go AFK Mode. Pinned AT Tab menu bar to top when scrolling.  Graph: Graph: FluffyXP . Continue Development on long TODO list...
- v2.1.6.6 - March 13, Geneticist management changes. Equipment code improvements. scriptLoad improvements. attempt to track errors.
- v2.1.6.5 - March 7, Save/Reload Profiles in Import/Export. Magmamancer graph. Magmite/Magma Spam disableable.
- v2.1.6.4 - March 4, 2018 Basic Analytics are now being collected. Read about it in the tooltip of the new button on the Import/Export tab . Overkill Graph fixed for Liquification.  Setting Max Explorers to infinity as they are not that useless anymore. Update battlecalc for Fluffy & Ice on Autostance2.
- v2.1.6.3 - March 3, 2018 AutoPerks: Capable/Curious/Cunning, BaseDamageCalc: C2,StillRowing,Strength in Health,Ice,Fluffy,Magmamancer - Fix bugs in autoperks around capable/fluffy allocating looting + more bugs
- v2.1.6.2 - March 2, 2018
- v2.1.6.1 - March 1, 2018
- v2.1.6.0 - December 23, 2018
- v2.1.5.7 - November 7,2017 = Merge in DerSkagg's GoldenUpgrades Mod (Pull request #90) (thanks Derskagg)
- v2.1.5.6 - August 26, 2017 = Merge ALL of Unihedro branch back into genBTC branch. (thanks UniHedro)
- v2.1.5.4 - August 26, 2017 = Added AutoDimGen + little fixes (FirenX)
took a break
- v2.1.5.3 - January 10, 2017 genbtc-1-10-2016+Modular (meant 2017 lol)

## Script Installation
**Please backup your game via export before and during use to prevent losing your save due to corruption!**

***Your only Option***: Install TamperMonkey (Chrome) or GreaseMonkey (Firefox)

**EASY INSTALL click here: https://github.com/Zorn192/AutoTrimps/raw/gh-pages/.user.js** (the Monkeys will detect this and prompt you to install it)

Overly detailed Chrome/TamperMonkey Instructions:
- Open the TamperMonkey dashboard and go to utilities – in the URL box paste https://github.com/Zorn192/AutoTrimps/raw/gh-pages/.user.js and click IMPORT
- Alternatively, paste the contents of `.user.js` into a user script (pay attention, it says .user.js - this contains 4 lines of code that loads AutoTrimps2.js)
- The script should automatically load everytime you go to https://trimps.github.io or the game on Kongregate
- You will know you have the script loaded if you see the Automation and Graphs buttons in the game menu at the bottom
- DO NOT PASTE THE FULL 2000+ line contents of the script into TamperMonkey! It will not work properly!
- The .user.js file is a "stub" or "loader" that references the AutoTrimps2.js file which is where the actual script is located.
- The purpose of .user.js is so that you don't have to rely on TamperMonkey's update functionality - instead it will automaticaly download the updated copy from the URL provided everytime its loaded.

FireFox/GreaseMonkey instructions:
- GreaseMonkey identifies userscripts by visiting a URL that ends with ".user.js" in them:
- Visit this URL, and Agree to install the userscript:  https://github.com/Zorn192/AutoTrimps/raw/gh-pages/.user.js

***LowLevelPlayer Notes:***

***PSA: AutoTrimps was not designed for  new/low-level players.***

The fact that it works at all is misleading new players into thinking its perfect. Its not. If your highest zone is under z60, you have not unlocked the stats required, and have not experienced the full meta with its various paradigm shifts. If you are just starting, my advice is to play along naturally and use AutoTrimps as a tool, not a crutch. Play with the settings as if it was the game, Dont expect to go unattended, if AT chooses wrong, and make the RIGHT choice yourself. Additionally, its not coded to run one-time challenges for you, only repeatable ones for helium. During this part of the game, content is king - automating literally removes the fun of the game. If you find that many flaws in the automation exist for you, level up. Keep in mind the challenge of maintaining the code is that it has to work for everyone. AT cant see the future and doesnt run simulations, it exists only in the present moment. Post any suggestions on how it can be better, or volunteer to adapt the code, or produce some sort of low-level player guide with what youve learned. Happy scripting! -genBTC

## Easy explanation of Colors for EquipUpgrades / prestiges highlights
- white - Upgrade is not available
- yellow - Upgrade is not affordable
- orange - Upgrade is affordable, but will lower stats
- red - Yes, do it now!

## Confusing original explanation of colors, (gl trying to understand this!)
- Red text on Equip - it's best in its category in terms of stat per resource. This also compares Gyms with Shields.
- Orange text - Upgrade is available and improving this will make the upgrade actually reduce stat in question and it's best in its category in terms of stat per resource.
- Yellow text - Upgrade is available and improving this will make the upgrade actually reduce stat in question
- White border - upgrade is not yet available
- Yellow border - upgrade is available, but not affordable
- Orange border - upgrade is available, affordable, but will actually reduce stat in question
- Red border - you have enough resources to level equip after upgrade to surpass it's current stats.
- Green border on buildings - Best for gems


## Detailed Code Documentation:
Read docs/main-doc.txt or docs/TODO.md for more complete info, the below is somewhat outdated.

Since javascript is easily human readable, Much can be learned by reading the source code, starting with this knowledge:

The script was faux-modularized on 12/4/2016, with the modules residing in the '/modules/' dir. This means that although the files are seperate, they are all still required for the script to run. In addition, the interoperability of the modules is still undocumented, and some(most) rely on other modules. Sometime in the future, you will be able to load/use different verisons of the various modules.
AutoTrimps2.js is the main file that loads the modules, and then runs its mainLoop.

The mainLoop() consists of the following subroutine functions, all of which are enable-able/disable-able by their buttons.:
-     exitSpireCell();        //"Exit Spire After Cell" (other.js)
-     workerRatios();         //"Auto Worker Ratios"
-     buyUpgrades();          //"Buy Upgrades"
-     autoGoldenUpgrades();   //"AutoGoldenUpgrades" (genBTC settings area)
-     buyStorage();           //"Buy Storage"
-     buyBuildings();         //"Buy Buildings"
-     buyJobs();              //"Buy Jobs"
-     manualLabor();          //"Auto Gather/Build"
-     autoMap();              //"Auto Maps"
-     autoBreedTimer();          //"Genetecist Timer" / "Auto Breed Timer"
-     autoPortal();           //"Auto Portal" (hidden until level 40)
-     autoHeirlooms2();  or  autoHeirlooms(); //"Auto Heirlooms 2" (genBTC settings area) or //"Auto Heirlooms"
-     autoNull();             //"Auto Upgrade Heirlooms" (genBTC settings area)
-     toggleAutoTrap();       //"Trap Trimps"
-     autoRoboTrimp();        //"AutoRoboTrimp" (genBTC settings area)
-     autoLevelEquipment();   //"Buy Armor", "Buy Armor Upgrades", "Buy Weapons","Buy Weapons Upgrades"
-     autoStance();           //"Auto Stance"
-     betterAutoFight();      //"Better Auto Fight"
-     prestigeChanging2();    //"Dynamic Prestige" (genBTC settings area)
-     userscripts();          //Runs any user provided scripts - by copying and pasting a function named userscripts() into the Chrome Dev console. (F12)

Once you have determined the function you wish to examine, CTRL+F to find it and read its code. There are lots of comments. In this way you can determine why AutoTrimps is acting a certain way.
