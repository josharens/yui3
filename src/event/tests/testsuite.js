YUI.add('event-synthetic-test', function(Y) {

var suite = new Y.Test.Suite("Y.SyntheticEvent");


function initTestbed() {
    var testbed = Y.one('#testbed'),
        outer   = Y.one('#outer'),
        body;

    if (!testbed) {
        body = Y.one('body');
        testbed = body.create('<div id="testbed"></div>');
        body.prepend(testbed);
    }

    testbed.setContent(
'<div id="outer">' +
    '<button id="button1">Button 1 text</button>' +
    '<ul class="nested">' +
        '<li id="item1">Item 1</li>' +
        '<li id="item2" class="nested">Item 2</li>' +
        '<li id="item3">Item 3</li>' +
    '</ul>' +
    '<div id="inner">' +
        '<p id="p1_no">no</p>' +
        '<p id="p2_yes">yes</p>' +
        '<div id="inner_1">' +
            '<p id="inner_1_p1_no">no</p>' +
            '<p id="inner_1_p2_yes">yes</p>' +
        '</div>' +
        '<p id="p3_no">no</p>' +
    '</div>' +
'</div>');
}

function initSynth() {
    Y.Event.define('synth', {
        on: function (node, sub, notifier, filter) {
            var method = (filter) ? 'delegate' : 'on';

            sub._handle = node[method]('click',
                Y.bind(notifier.fire, notifier), filter);
        },

        delegate: function () {
            this.on.apply(this, arguments);
        },

        detach: function (node, sub) {
            sub._handle.detach();
        },

        detachDelegate: function () {
            this.detach.apply(this, arguments);
        }
    });
}

function setUp() {
    initTestbed();
    initSynth();
}

function destroyTestbed() {
    var testbed = Y.one('#testbed');
    if (testbed) {
        testbed.purge(true).remove();
    }
}

function undefineSynth() {
    delete Y.Node.DOM_EVENTS.synth;
    delete Y.Env.evt.plugins.synth;
}

function tearDown() {
    undefineSynth();
    destroyTestbed();
}

suite.add(new Y.Test.Case({
    name: "Y.Event.define",

    "Y.Event.define should register a new synth in DOM_EVENTS": function () {
        Y.Event.define('synth', {
            index: 0
        });

        Y.Assert.isNotUndefined(Y.Node.DOM_EVENTS.synth);
        Y.Assert.isNotUndefined(Y.Env.evt.plugins.synth);
        Y.Assert.isNotUndefined(Y.Node.DOM_EVENTS.synth.eventDef);
        Y.Assert.areSame(0, Y.Node.DOM_EVENTS.synth.eventDef.index);
    },

    "Subsequent Y.Event.define() should not overwrite existing synth": function () {
        Y.Event.define('synth', {
            index: 1
        });

        Y.Assert.areSame(0, Y.Node.DOM_EVENTS.synth.eventDef.index);
    },

    "Y.Event.define(..., true) should overwrite existing synth": function () {
        Y.Event.define('synth', {
            index: 2
        }, true);

        Y.Assert.areSame(2, Y.Node.DOM_EVENTS.synth.eventDef.index);
    }
}));

suite.add(new Y.Test.Case({
    name: "Y.on",

    setUp: setUp,

    tearDown: tearDown,

    "test Y.on('synth', fn, node)": function () {
    },

    "test Y.on('synth', fn, node, thisObj)": function () {
    },

    "test Y.on('synth', fn, node, thisObj, arg)": function () {
    },

    "test Y.on('synth', fn, node, null, arg)": function () {
    },

    "test Y.on('synth', fn, el)": function () {
    },

    "test Y.on('synth', fn, el, thisObj)": function () {
    },

    "test Y.on('synth', fn, el, thisObj, arg)": function () {
    },

    "test Y.on('synth', fn, el, null, arg)": function () {
    },

    "test Y.on('synth', fn, selectorOne)": function () {
    },

    "test Y.on('synth', fn, selectorOne, thisObj)": function () {
    },

    "test Y.on('synth', fn, selectorOne, thisObj, arg)": function () {
    },

    "test Y.on('synth', fn, selectorOne, null, arg)": function () {
    },

    "test Y.on('synth', fn, selectorMultiple)": function () {
    },

    "test Y.on('synth', fn, selectorMultiple, thisObj)": function () {
    },

    "test Y.on('synth', fn, selectorMultiple, thisObj, arg)": function () {
    },

    "test Y.on('synth', fn, selectorMultiple, null, arg)": function () {
    },

    "test Y.on('synth', fn, notYetAvailable)": function () {
    },

    "test Y.on('synth', fn, notYetAvailable, thisObj)": function () {
    },

    "test Y.on('synth', fn, notYetAvailable, thisObj, arg)": function () {
    },

    "test Y.on('synth', fn, notYetAvailable, null, arg)": function () {
    }
}));

suite.add(new Y.Test.Case({
    name: 'node.on',

    setUp: setUp,
    tearDown: tearDown,

    "test node.on(x, fn)": function () {
    },

    "test node.on(x, fn, thisObj)": function () {
    },

    "test node.on(x, fn, thisObj, arg)": function () {
    },

    "test node.on(x, fn, null, arg)": function () {
    }
}));

suite.add(new Y.Test.Case({
    name: 'nodelist.on',

    setUp: setUp,
    tearDown: tearDown,

    "test nodelist.on(x, fn)": function () {
    },

    "test nodelist.on(x, fn, thisObj)": function () {
    },

    "test nodelist.on(x, fn, thisObj, arg)": function () {
    },

    "test nodelist.on(x, fn, null, arg)": function () {
    }
}));

suite.add(new Y.Test.Case({
    name: 'preventDups',

    setUp: setUp,
    tearDown: tearDown,

    "test node.on(x, fn) + node.on(x, fn) vs dup": function () {
    },

    "test Y.on(x, fn) + node.on(x, fn) vs dup": function () {
    },

    "test nodelist.on(x, fn) + node.on(x, fn) vs dup": function () {
    }
}));

suite.add(new Y.Test.Case({
    name: "Y.delegate",

    setUp: setUp,
    tearDown: tearDown

}));

suite.add(new Y.Test.Case({
    name: "node.delegate",

    setUp: setUp,
    tearDown: tearDown

}));

suite.add(new Y.Test.Case({
    name: "Detach",

    setUp: setUp,
    tearDown: tearDown

}));

Y.Test.Runner.add(suite);


}, '@VERSION@' ,{requires:['test', 'event-synthetic']});
