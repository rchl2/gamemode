"use strict";

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
    var weaponHash = mp.joaat(weapon);

    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
    player.call("actionDone", [
        "Komendy administracyjne",
        "Dałeś testową broń twojej postaci. Pamiętaj o tym, że nie jest to przedmiot i aby korzystać z tej komendy do testów."
    ]);
});