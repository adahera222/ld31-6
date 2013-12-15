function EnemyContainer() {
	this._enemies = new Array();
}

EnemyContainer.prototype.addEnemy = function(x, y) {
	var enemy = new Enemy(x, y, this._enemies.length, this);
	this._enemies.push(enemy);
}

EnemyContainer.prototype.removeEnemy = function(id) {
	var enemyToKill = this._enemies[id];
	this._enemies[id] = this._enemies[this._enemies.length - 1];
	this._enemies[id].setId(id);
	this._enemies.pop();
	enemyToKill.die();
}

EnemyContainer.prototype.update = function() {
	for (var i = 0; i < this._enemies.length; ++i)
		this._enemies[i].update();
}