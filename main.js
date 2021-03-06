var PoEdit = new function()
{
	var MANUAL_UPDATE = false;

	var defaultItems = [
		{
			name: 'Full Plate',
			itemLevel: 66,
			dropLevel: 28,
			quality: 8,
			rarity: Rarity.Normal,
			itemClass: 'Body Armour',
			baseType: 'Full Plate',
			sockets: ['RRRRRR']
		},
		{
			name: 'Heavy Strike (Level 12)',
			itemLevel: 43,
			dropLevel: 1,
			quality: 12,
			rarity: Rarity.Normal,
			itemClass: 'Gem',
			baseType: 'Heavy Strike',
			sockets: []
		},
		{
			name: 'Armourer\'s Scrap',
			itemLevel: 53,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Armourer\'s Scrap',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Orb of Alchemy',
			itemLevel: 17,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Orb of Alchemy',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Orb of Augmentation',
			itemLevel: 29,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Orb of Augmentation',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Chromatic Orb',
			itemLevel: 9,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Chromatic Orb',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Rusted Sword',
			itemLevel: 9,
			dropLevel: 1,
			quality: 0,
			itemClass: 'One Hand Sword',
			baseType: 'Rusted Sword',
			rarity: Rarity.Rare,
			sockets: ['B', 'G']
		},
		{
			name: 'Summon Chaos Golem',
			itemLevel: 68,
			dropLevel: 30,
			quality: 0,
			itemClass: 'Gem',
			baseType: 'Summon Chaos Golem',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Added Fire Damage (Level 10)',
			itemLevel: 54,
			dropLevel: 12,
			quality: 0,
			itemClass: 'Gem',
			baseType: 'Added Fire Damage',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Exalted Orb',
			itemLevel: 67,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Exalted Orb',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Crypt Map',
			itemLevel: 67,
			dropLevel: 66,
			quality: 0,
			itemClass: 'Map',
			baseType: 'Crypt Map',
			rarity: Rarity.Unique,
			sockets: []
		},
		{
			name: 'Great White Claw',
			itemLevel: 62,
			dropLevel: 58,
			quality: 8,
			itemClass: 'Claw',
			baseType: 'Great White Claw',
			rarity: Rarity.Magic,
			sockets: ['R','GG']
		},
		{
			name: 'Occultist\'s Vestment',
			itemLevel: 67,
			dropLevel: 57,
			quality: 0,
			itemClass: 'Body Armour',
			baseType: 'Occultist\'s Vestment',
			rarity: Rarity.Normal,
			sockets: ['RB','GBB','B']
		},
		{
			name: 'Highland Blade',
			itemLevel: 54,
			dropLevel: 44,
			quality: 0,
			itemClass: 'Two Handed Sword',
			baseType: 'Highland Blade',
			rarity: Rarity.Magic,
			sockets: ['RRGRR']
		},
		{
			name: 'Iron Hat',
			itemLevel: 70,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Helmet',
			baseType: 'Iron Hat',
			rarity: Rarity.Normal,
			sockets: ['B']
		},
		{
			name: 'Leather Cap',
			itemLevel: 23,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Helmet',
			baseType: 'Leather Cap',
			rarity: Rarity.Normal,
			sockets: ['RGB','G']
		},
		{
			name: 'Crusader Plate',
			itemLevel: 69,
			dropLevel: 59,
			quality: 0,
			itemClass: 'Body Armor',
			baseType: 'Crusader Plate',
			rarity: Rarity.Unique,
			sockets: ['RR','RR']
		},
		{
			name: 'Imperial Staff',
			itemLevel: 66,
			dropLevel: 66,
			quality: 0,
			itemClass: 'Staff',
			baseType: 'Imperial Staff',
			rarity: Rarity.Unique,
			sockets: ['B']
		},

		{
			name: 'Tropical Island Map',
			itemLevel: 67,
			dropLevel: 66,
			quality: 0,
			itemClass: 'Map',
			baseType: 'Tropical Island Map',
			rarity: Rarity.Magic,
			sockets: []
		},
		{
			name: 'Torture Chamber Map',
			itemLevel: 72,
			dropLevel: 72,
			quality: 0,
			itemClass: 'Map',
			baseType: 'Torture Chamber Map',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Crimson Jewel',
			itemLevel: 20,
			dropLevel: 12,
			quality: 0,
			itemClass: 'Jewel',
			baseType: 'Crimson Jewel',
			rarity: Rarity.Magic,
			sockets: []
		},
		{
			name: 'Viridian Jewel',
			itemLevel: 72,
			dropLevel: 61,
			quality: 0,
			itemClass: 'Jewel',
			baseType: 'Viridian Jewel',
			rarity: Rarity.Unique,
			sockets: []
		},
		{
			name: 'Scroll of Wisdom',
			itemLevel: 75,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Scroll of Wisdom',
			rarity: Rarity.Normal,
			sockets: []
		},
		{
			name: 'Portal Scroll',
			itemLevel: 5,
			dropLevel: 1,
			quality: 0,
			itemClass: 'Currency',
			baseType: 'Portal Scroll',
			rarity: Rarity.Normal,
			sockets: []
		},

	];

	function applyDefaultStyle (item) {
		var BLACK = {r:0, g:0, b:0};
		var WHITE = {r:255, g:255, b:255};
		var BLUE = {r:50, g:50, b:220};
		var YELLOW = {r:255, g:255, b:50};
		var ORANGE = {r:220, g:150, b:50};
		var GOLD = {r:200, g:180, b:100};
		var CYAN = {r:50, g:255, b:255};

		var color = WHITE;

		if (item.rarity == Rarity.Magic) {
			color = BLUE;
		}
		else if (item.rarity == Rarity.Rare) {
			color = YELLOW;
		}
		else if (item.rarity == Rarity.Unique) {
			color = ORANGE;
		}
		else if (item.itemClass == 'Currency') {
			color = GOLD;
		}
		else if (item.itemClass == 'Gem') {
			color = CYAN;
		}

		item.setVisibility( true );
		item.removeBorder();
		item.setBackgroundColor( BLACK );
		item.setTextColor( color );

		if (item.itemClass === 'Map') {
			item.setBorderColor( color );
		}
	}

	function addDefaultScript() {
		var codeWindow = document.getElementById( 'code-window' );
		var code =
			'Show\n' +
			'    Class Gem\n' +
			'    Quality > 0\n' +
			'    SetBorderColor 128 128 255 \n' +
    		'\n' +
			'Show\n' +
			'    BaseType "Exalted Orb"\n' +
			'    SetTextColor 255 0 255\n' +
			'\n' +
			'Show\n' +
			'    SocketGroup RGB\n' +
			'    PlayAlertSound 1    \n' +
			'\n' +
			'Show\n' +
			'    LinkedSockets >= 5\n' +
			'    SetBackgroundColor 0 128 0\n';

		code = StrUtils.replaceAll( code, '\n', '<br>' );
		code = StrUtils.replaceAll( code, '  ', '&nbsp; ' );
		codeWindow.innerHTML = code;
	}

	function createItems() {
		var items = [];
		ArrayUtils.shuffle( defaultItems ).forEach( function(item) {
			items.push( new Item(item) );
		});
		return items;
	}

	function drawItems (items) {
		items.forEach( function(item) {
			item.draw();
			applyDefaultStyle( item );
			item.onMouseOver = function() { onHoverItemStart(item); }
			item.onMouseOut = function() { onHoverItemEnd(item); }
		});
	}

	function onHoverItemStart (item) {
		if (item.matchingRule !== null) {
			PoEdit.editor.highlightLines = item.matchingRule.codeLines;
		}
		PoEdit.itemDetails.item = item;
	}

	function onHoverItemEnd (item) {
		PoEdit.editor.highlightLines = [];
		PoEdit.itemDetails.item = null;
	}

	function getCode() {
		var codeWindow = document.getElementById( 'code-window' );
		return DomUtils.getText( [codeWindow] ); // cannot use innerText on Firefox
	}

	function clearLog() {
		var logWindow = document.getElementById( 'log-window' );
		logWindow.innerText = '';
	}

	function addErrorMessage (message) {
		var logWindow = document.getElementById( 'log-window' );
		logWindow.innerText += '\n' + message;
	}

	// There are different ways how the key code may be stored in the event on different browsers
	function getKeyCode (event) {
		if (event.keyCode) {
			return event.keyCode;
		}
		else if (event.which) {
			return event.which;
		}
	}

	function onKeyDown (event) {
		var code = getKeyCode( event );

		// Tab
		if (code === 9) {
			if (PoEdit.intellisense.isVisible()) {
				event.preventDefault();
				PoEdit.intellisense.applySuggestion();
			}
		}
		// Arrow Up
		else if (code === 38) {
			if (PoEdit.intellisense.isVisible()) {
				event.preventDefault();
				PoEdit.intellisense.selectPrevious();
			}
		}
		// Arrow Down
		else if (code === 40) {
			if (PoEdit.intellisense.isVisible()) {
				event.preventDefault();
				PoEdit.intellisense.selectNext();
			}
		}
		// Escape
		else if (code === 27) {
			if (PoEdit.intellisense.isVisible()) {
				event.preventDefault();
				PoEdit.intellisense.enabled = false;
			}
		}
		// Ctrl+Space
		else if (code === 32) {
			if (event.ctrlKey) {
				event.preventDefault();
				PoEdit.intellisense.enabled = true;
				PoEdit.intellisense.enabledOnEmptyLine = true;
			}
		}
	}

	this.parser = new Parser();
	this.editor = new Editor();
	this.itemDetails = new ItemDetails();
	this.codeCursorPos = 0;
	this.intellisense = new Intellisense();

	this.init = function() {
		this.items = createItems();
		drawItems( this.items );

		addDefaultScript();
		this.editor.init();
		this.intellisense.init();
		this.itemDetails.init();

		var self = this;
		if (MANUAL_UPDATE) {
			var button = document.getElementById( 'manual-update-button' );
			button.style.display = 'block';
			button.addEventListener('click', function() { self.update(); });
		}
		else {
			setInterval( function() { self.update(); }, 250 );
		}

		document.getElementById( 'code-window' ).addEventListener( 'keydown', onKeyDown, true );
	}

	this.update = function() {
		var code = getCode();
		var rawLines = code.split( '\n' );
		this.parser.parse( rawLines );

		clearLog();
		this.parser.errors.forEach( addErrorMessage );

		this.editor.formatCode( rawLines, this.parser.lineTypes );

		this.items.forEach( function(item) {
			applyDefaultStyle( item );

			for (var i=0; i < this.parser.ruleSet.length; i++) {
				var rule = this.parser.ruleSet[i];
				if (rule.match( item )) {
					item.matchingRule = rule;
					rule.applyTo( item );
					break;
				}
			}
		}, this );

		// If code window is in focus
		var codeWindow = document.getElementById( 'code-window' );
		if (codeWindow === document.activeElement) {
			// Get cursor position from code window
			this.codeCursorPos = DomUtils.saveSelection( codeWindow );
			if (this.codeCursorPos !== null && this.codeCursorPos.length > 0) {
				// Update intellisense
				var cp = this.codeCursorPos[0].characterRange.start;
				this.intellisense.update( rawLines, cp );
			}
		}

		this.itemDetails.update();
	}

};
