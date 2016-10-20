var globalVar;
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
  var urls = [ "www.cnn.com", 5, globalVar];
  this.request = new XMLHttpRequest();
  url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
  /* check the url to be in urls */
  var a = "\u1111\z\n\u11";
  this.foo = new function() {};
  foo();
  #
}

class NameClass {
}




//


function Level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];

    for (var y = 0; y < this.height; y++) {
        var line = plan[y], gridLine = [];
        for (var x = 0; x < this.width; x++) {
            var ch = line[x], fieldType = null;
            var Actor = actorChars[ch];
            if (Actor) {
                this.actors.push(new Actor(new Vector(x, y), ch));
            }
            else if (ch == "x") {
                fieldType = "wall";
            }
            else if (ch == "!") {
                fieldType = "lava";
            }
            gridLine.push(fieldType);
        }
        this.grid.push(gridLine);
    }

    this.player = this.actors.filter(function(actor) {
        return actor.type == "player";
    })[0];
    this.status = this.finishDelay = null;
}
Level.prototype.isFinished = function() {
    return this.status != null && this.finishDelay < 0;
};
Level.prototype.obstacleAt = function(pos, size) {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0) {
        return "wall";
    }
    if (yEnd > this.height) {
        return "lava";
    }
    for (var y = yStart; y < yEnd; y++) {
        for (var x = xStart; x < xEnd; x++) {
            var fieldType = this.grid[y][x];
            if (fieldType) {
                return fieldType;
            }
        }
    }
};

function parseExpression(program) {
    program = skipSpace(program);
    var match, expr;

    if (match = /^"([^"]*)"/.exec(program)) {
        expr = {type: "value", value: match[i]};
    }
    else if (match = /^\d+\b/.exec(program)) {
        expr = {type: "value", value: Number(match[0])};
    }
    else if (match = /^[^\s(),"]+/.exec(program)) {
        expr = {type: "word", name: match[0]};
    }
    else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }

    return parseApply(expr, program.slice(match[0].length));
}
