function ItemDetails() {
    this.item = null;

    this.div = null;
    this.itemLevelLabel = null;
    this.dropLevelLabel = null;
    this.qualityLabel = null;
    this.rarityLabel = null;
    this.itemClassLabel = null;
    this.baseTypeLabel = null;

    this.init = function() {
        this.div = document.getElementById( 'item-details' );
        for (var i=0; i < this.div.children.length; i++) {
            var child = this.div.children[i];
            switch (child.getAttribute('data')) {
                case 'item-level':
                    this.itemLevelLabel = getValueLabel( child );
                    break;
                case 'drop-level':
                    this.dropLevelLabel = getValueLabel( child );
                    break;
                case 'quality':
                    this.qualityLabel = getValueLabel( child );
                    break;
                case 'rarity':
                    this.rarityLabel = getValueLabel( child );
                    break;
                case 'class':
                    this.itemClassLabel = getValueLabel( child );
                    break;
                case 'base-type':
                    this.baseTypeLabel = getValueLabel( child );
                    break;
            }
        }
    }

    this.update = function() {
        if (this.item === null) {
            this.div.style.display = 'none';
            return;
        }

        this.div.style.display = 'block';
        var itemPos = this.item.domElement.getBoundingClientRect();
        this.div.style.left = itemPos.left;
        this.div.style.top = itemPos.bottom;

        this.itemLevelLabel.innerText = this.item.itemLevel.toString();
        this.dropLevelLabel.innerText = this.item.dropLevel.toString();
        this.qualityLabel.innerText = this.item.quality.toString();
        this.rarityLabel.innerText = Rarity.getName( this.item.rarity );
        this.itemClassLabel.innerText = this.item.itemClass;
        this.baseTypeLabel.innerText = this.item.baseType;
    }

    function getValueLabel (elem) {
        for (var i=0; i < elem.children.length; i++) {
            var child = elem.children[i];
            if (child.className === 'value') {
                return child;
            }
        }
    }
}
