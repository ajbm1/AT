function calculateDamageAT() {
var trimpATK1 = calculateDamage(game.global.soldierCurrentAttack, true, true);
var trimpATK = parseFloat(trimpATK1)
return trimpATK;
}
