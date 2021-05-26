import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Copperajah VMAX",
		fr: "Pachyradjah VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		en: "Copperajah V",
		fr: "Pachyradjah-V"
	},

	attacks: [{
		name: {
			en: "Dangerous Nose",
			fr: "Nez Dangereux"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			en: "G-Max Hammer",
			fr: "Marteau G-Max"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4
}

export default card