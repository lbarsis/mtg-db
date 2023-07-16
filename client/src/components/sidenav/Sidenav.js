import React, { useContext, useState } from 'react';
import '../../styles/sidenav/sidenav.css'
import { CardContext } from '../../context/cardContext';

function Sidenav() {
  const [formData, setFormData] = useState({
    search: '',
    cardType: ''
  })
  const { cards, setCards } = useContext(CardContext)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // console.log(formData)

  const searchCards = (e) => {
    e.preventDefault(e)
    const { search, cardType } = formData
    fetch(`https://api.scryfall.com/cards/search?q=${search}&t:${cardType}`)
      .then(r => r.json())
      .then(result => setCards(result.data))
  }

  return (
    <div>
      <div className="sidenav">
        <form className='filter-form' onSubmit={searchCards}>
          <label>Name:</label>
          <input
            name='search'
            type='text'
            placeholder='Type anything...'
            onChange={handleChange}
            value={formData.search}
          />

          <label>Type:</label>
          <select name="type[]" id="type" multiple="" data-component="advanced-search-autocomplete" data-placeholder="Enter a type or choose from the list" data-allow-entry="true" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"><optgroup label="Types"><option data-pol="+" data-item="artifact" value="artifact">Artifact</option>
            <option data-pol="+" data-item="battle" value="battle">Battle</option>
            <option data-pol="+" data-item="conspiracy" value="conspiracy">Conspiracy</option>
            <option data-pol="+" data-item="creature" value="creature">Creature</option>
            <option data-pol="+" data-item="emblem" value="emblem">Emblem</option>
            <option data-pol="+" data-item="enchantment" value="enchantment">Enchantment</option>
            <option data-pol="+" data-item="hero" value="hero">Hero</option>
            <option data-pol="+" data-item="instant" value="instant">Instant</option>
            <option data-pol="+" data-item="land" value="land">Land</option>
            <option data-pol="+" data-item="phenomenon" value="phenomenon">Phenomenon</option>
            <option data-pol="+" data-item="plane" value="plane">Plane</option>
            <option data-pol="+" data-item="planeswalker" value="planeswalker">Planeswalker</option>
            <option data-pol="+" data-item="scheme" value="scheme">Scheme</option>
            <option data-pol="+" data-item="sorcery" value="sorcery">Sorcery</option>
            <option data-pol="+" data-item="tribal" value="tribal">Tribal</option>
            <option data-pol="+" data-item="vanguard" value="vanguard">Vanguard</option></optgroup><optgroup label="Supertypes"><option data-pol="+" data-item="basic" value="basic">Basic</option>
              <option data-pol="+" data-item="elite" value="elite">Elite</option>
              <option data-pol="+" data-item="legendary" value="legendary">Legendary</option>
              <option data-pol="+" data-item="ongoing" value="ongoing">Ongoing</option>
              <option data-pol="+" data-item="snow" value="snow">Snow</option>
              <option data-pol="+" data-item="token" value="token">Token</option>
              <option data-pol="+" data-item="world" value="world">World</option></optgroup><optgroup label="Artifact Types"><option data-pol="+" data-item="attraction" value="attraction">Attraction</option>
              <option data-pol="+" data-item="blood" value="blood">Blood</option>
              <option data-pol="+" data-item="clue" value="clue">Clue</option>
              <option data-pol="+" data-item="contraption" value="contraption">Contraption</option>
              <option data-pol="+" data-item="equipment" value="equipment">Equipment</option>
              <option data-pol="+" data-item="food" value="food">Food</option>
              <option data-pol="+" data-item="fortification" value="fortification">Fortification</option>
              <option data-pol="+" data-item="gold" value="gold">Gold</option>
              <option data-pol="+" data-item="powerstone" value="powerstone">Powerstone</option>
              <option data-pol="+" data-item="treasure" value="treasure">Treasure</option>
              <option data-pol="+" data-item="vehicle" value="vehicle">Vehicle</option></optgroup><optgroup label="Enchantment Types"><option data-pol="+" data-item="aura" value="aura">Aura</option>
              <option data-pol="+" data-item="background" value="background">Background</option>
              <option data-pol="+" data-item="cartouche" value="cartouche">Cartouche</option>
              <option data-pol="+" data-item="class" value="class">Class</option>
              <option data-pol="+" data-item="curse" value="curse">Curse</option>
              <option data-pol="+" data-item="rune" value="rune">Rune</option>
              <option data-pol="+" data-item="saga" value="saga">Saga</option>
              <option data-pol="+" data-item="shard" value="shard">Shard</option>
              <option data-pol="+" data-item="shrine" value="shrine">Shrine</option></optgroup><optgroup label="Land Types"><option data-pol="+" data-item="cloud" value="cloud">Cloud</option>
              <option data-pol="+" data-item="desert" value="desert">Desert</option>
              <option data-pol="+" data-item="forest" value="forest">Forest</option>
              <option data-pol="+" data-item="gate" value="gate">Gate</option>
              <option data-pol="+" data-item="island" value="island">Island</option>
              <option data-pol="+" data-item="lair" value="lair">Lair</option>
              <option data-pol="+" data-item="locus" value="locus">Locus</option>
              <option data-pol="+" data-item="mine" value="mine">Mine</option>
              <option data-pol="+" data-item="mountain" value="mountain">Mountain</option>
              <option data-pol="+" data-item="sphere" value="sphere">Sphere</option>
              <option data-pol="+" data-item="plains" value="plains">Plains</option>
              <option data-pol="+" data-item="power-plant" value="power-plant">Power-Plant</option>
              <option data-pol="+" data-item="swamp" value="swamp">Swamp</option>
              <option data-pol="+" data-item="tower" value="tower">Tower</option>
              <option data-pol="+" data-item="urza's" value="urza's">Urza's</option></optgroup><optgroup label="Spell Types"><option data-pol="+" data-item="adventure" value="adventure">Adventure</option>
              <option data-pol="+" data-item="arcane" value="arcane">Arcane</option>
              <option data-pol="+" data-item="lesson" value="lesson">Lesson</option>
              <option data-pol="+" data-item="trap" value="trap">Trap</option></optgroup><optgroup label="Planeswalker Types"><option data-pol="+" data-item="abian" value="abian">Abian</option>
              <option data-pol="+" data-item="ajani" value="ajani">Ajani</option>
              <option data-pol="+" data-item="aminatou" value="aminatou">Aminatou</option>
              <option data-pol="+" data-item="angrath" value="angrath">Angrath</option>
              <option data-pol="+" data-item="arlinn" value="arlinn">Arlinn</option>
              <option data-pol="+" data-item="ashiok" value="ashiok">Ashiok</option>
              <option data-pol="+" data-item="b.o.b." value="b.o.b.">B.O.B.</option>
              <option data-pol="+" data-item="bahamut" value="bahamut">Bahamut</option>
              <option data-pol="+" data-item="basri" value="basri">Basri</option>
              <option data-pol="+" data-item="bolas" value="bolas">Bolas</option>
              <option data-pol="+" data-item="calix" value="calix">Calix</option>
              <option data-pol="+" data-item="chandra" value="chandra">Chandra</option>
              <option data-pol="+" data-item="comet" value="comet">Comet</option>
              <option data-pol="+" data-item="dack" value="dack">Dack</option>
              <option data-pol="+" data-item="dakkon" value="dakkon">Dakkon</option>
              <option data-pol="+" data-item="daretti" value="daretti">Daretti</option>
              <option data-pol="+" data-item="davriel" value="davriel">Davriel</option>
              <option data-pol="+" data-item="dihada" value="dihada">Dihada</option>
              <option data-pol="+" data-item="domri" value="domri">Domri</option>
              <option data-pol="+" data-item="dovin" value="dovin">Dovin</option>
              <option data-pol="+" data-item="duck" value="duck">Duck</option>
              <option data-pol="+" data-item="dungeon" value="dungeon">Dungeon</option>
              <option data-pol="+" data-item="ellywick" value="ellywick">Ellywick</option>
              <option data-pol="+" data-item="elminster" value="elminster">Elminster</option>
              <option data-pol="+" data-item="elspeth" value="elspeth">Elspeth</option>
              <option data-pol="+" data-item="ersta" value="ersta">Ersta</option>
              <option data-pol="+" data-item="estrid" value="estrid">Estrid</option>
              <option data-pol="+" data-item="freyalise" value="freyalise">Freyalise</option>
              <option data-pol="+" data-item="garruk" value="garruk">Garruk</option>
              <option data-pol="+" data-item="gideon" value="gideon">Gideon</option>
              <option data-pol="+" data-item="grist" value="grist">Grist</option>
              <option data-pol="+" data-item="guff" value="guff">Guff</option>
              <option data-pol="+" data-item="huatli" value="huatli">Huatli</option>
              <option data-pol="+" data-item="inzerva" value="inzerva">Inzerva</option>
              <option data-pol="+" data-item="jace" value="jace">Jace</option>
              <option data-pol="+" data-item="jared" value="jared">Jared</option>
              <option data-pol="+" data-item="jaya" value="jaya">Jaya</option>
              <option data-pol="+" data-item="jeska" value="jeska">Jeska</option>
              <option data-pol="+" data-item="kaito" value="kaito">Kaito</option>
              <option data-pol="+" data-item="karn" value="karn">Karn</option>
              <option data-pol="+" data-item="kasmina" value="kasmina">Kasmina</option>
              <option data-pol="+" data-item="kaya" value="kaya">Kaya</option>
              <option data-pol="+" data-item="kiora" value="kiora">Kiora</option>
              <option data-pol="+" data-item="koth" value="koth">Koth</option>
              <option data-pol="+" data-item="liliana" value="liliana">Liliana</option>
              <option data-pol="+" data-item="lolth" value="lolth">Lolth</option>
              <option data-pol="+" data-item="lukka" value="lukka">Lukka</option>
              <option data-pol="+" data-item="master" value="master">Master</option>
              <option data-pol="+" data-item="minsc" value="minsc">Minsc</option>
              <option data-pol="+" data-item="mordenkainen" value="mordenkainen">Mordenkainen</option>
              <option data-pol="+" data-item="nahiri" value="nahiri">Nahiri</option>
              <option data-pol="+" data-item="narset" value="narset">Narset</option>
              <option data-pol="+" data-item="niko" value="niko">Niko</option>
              <option data-pol="+" data-item="nissa" value="nissa">Nissa</option>
              <option data-pol="+" data-item="nixilis" value="nixilis">Nixilis</option>
              <option data-pol="+" data-item="oko" value="oko">Oko</option>
              <option data-pol="+" data-item="ral" value="ral">Ral</option>
              <option data-pol="+" data-item="rowan" value="rowan">Rowan</option>
              <option data-pol="+" data-item="saheeli" value="saheeli">Saheeli</option>
              <option data-pol="+" data-item="samut" value="samut">Samut</option>
              <option data-pol="+" data-item="sarkhan" value="sarkhan">Sarkhan</option>
              <option data-pol="+" data-item="serra" value="serra">Serra</option>
              <option data-pol="+" data-item="sivitri" value="sivitri">Sivitri</option>
              <option data-pol="+" data-item="sorin" value="sorin">Sorin</option>
              <option data-pol="+" data-item="szat" value="szat">Szat</option>
              <option data-pol="+" data-item="tamiyo" value="tamiyo">Tamiyo</option>
              <option data-pol="+" data-item="tasha" value="tasha">Tasha</option>
              <option data-pol="+" data-item="teferi" value="teferi">Teferi</option>
              <option data-pol="+" data-item="teyo" value="teyo">Teyo</option>
              <option data-pol="+" data-item="tezzeret" value="tezzeret">Tezzeret</option>
              <option data-pol="+" data-item="tibalt" value="tibalt">Tibalt</option>
              <option data-pol="+" data-item="tyvar" value="tyvar">Tyvar</option>
              <option data-pol="+" data-item="ugin" value="ugin">Ugin</option>
              <option data-pol="+" data-item="urza" value="urza">Urza</option>
              <option data-pol="+" data-item="venser" value="venser">Venser</option>
              <option data-pol="+" data-item="vivien" value="vivien">Vivien</option>
              <option data-pol="+" data-item="vraska" value="vraska">Vraska</option>
              <option data-pol="+" data-item="will" value="will">Will</option>
              <option data-pol="+" data-item="windgrace" value="windgrace">Windgrace</option>
              <option data-pol="+" data-item="wrenn" value="wrenn">Wrenn</option>
              <option data-pol="+" data-item="xenagos" value="xenagos">Xenagos</option>
              <option data-pol="+" data-item="yanggu" value="yanggu">Yanggu</option>
              <option data-pol="+" data-item="yanling" value="yanling">Yanling</option>
              <option data-pol="+" data-item="zariel" value="zariel">Zariel</option></optgroup><optgroup label="Creature Types"><option data-pol="+" data-item="advisor" value="advisor">Advisor</option>
              <option data-pol="+" data-item="aetherborn" value="aetherborn">Aetherborn</option>
              <option data-pol="+" data-item="alicorn" value="alicorn">Alicorn</option>
              <option data-pol="+" data-item="alien" value="alien">Alien</option>
              <option data-pol="+" data-item="ally" value="ally">Ally</option>
              <option data-pol="+" data-item="angel" value="angel">Angel</option>
              <option data-pol="+" data-item="antelope" value="antelope">Antelope</option>
              <option data-pol="+" data-item="ape" value="ape">Ape</option>
              <option data-pol="+" data-item="archer" value="archer">Archer</option>
              <option data-pol="+" data-item="archon" value="archon">Archon</option>
              <option data-pol="+" data-item="army" value="army">Army</option>
              <option data-pol="+" data-item="art" value="art">Art</option>
              <option data-pol="+" data-item="artificer" value="artificer">Artificer</option>
              <option data-pol="+" data-item="assassin" value="assassin">Assassin</option>
              <option data-pol="+" data-item="assembly-worker" value="assembly-worker">Assembly-Worker</option>
              <option data-pol="+" data-item="astartes" value="astartes">Astartes</option>
              <option data-pol="+" data-item="atog" value="atog">Atog</option>
              <option data-pol="+" data-item="aurochs" value="aurochs">Aurochs</option>
              <option data-pol="+" data-item="autobot" value="autobot">Autobot</option>
              <option data-pol="+" data-item="avatar" value="avatar">Avatar</option>
              <option data-pol="+" data-item="azra" value="azra">Azra</option>
              <option data-pol="+" data-item="baddest," value="baddest,">Baddest,</option>
              <option data-pol="+" data-item="badger" value="badger">Badger</option>
              <option data-pol="+" data-item="balloon" value="balloon">Balloon</option>
              <option data-pol="+" data-item="barbarian" value="barbarian">Barbarian</option>
              <option data-pol="+" data-item="bard" value="bard">Bard</option>
              <option data-pol="+" data-item="basilisk" value="basilisk">Basilisk</option>
              <option data-pol="+" data-item="bat" value="bat">Bat</option>
              <option data-pol="+" data-item="bear" value="bear">Bear</option>
              <option data-pol="+" data-item="beast" value="beast">Beast</option>
              <option data-pol="+" data-item="beaver" value="beaver">Beaver</option>
              <option data-pol="+" data-item="beeble" value="beeble">Beeble</option>
              <option data-pol="+" data-item="beholder" value="beholder">Beholder</option>
              <option data-pol="+" data-item="berserker" value="berserker">Berserker</option>
              <option data-pol="+" data-item="biggest," value="biggest,">Biggest,</option>
              <option data-pol="+" data-item="bird" value="bird">Bird</option>
              <option data-pol="+" data-item="blinkmoth" value="blinkmoth">Blinkmoth</option>
              <option data-pol="+" data-item="boar" value="boar">Boar</option>
              <option data-pol="+" data-item="brainiac" value="brainiac">Brainiac</option>
              <option data-pol="+" data-item="bringer" value="bringer">Bringer</option>
              <option data-pol="+" data-item="brushwagg" value="brushwagg">Brushwagg</option>
              <option data-pol="+" data-item="bureaucrat" value="bureaucrat">Bureaucrat</option>
              <option data-pol="+" data-item="c'tan" value="c'tan">C'tan</option>
              <option data-pol="+" data-item="camarid" value="camarid">Camarid</option>
              <option data-pol="+" data-item="camel" value="camel">Camel</option>
              <option data-pol="+" data-item="caribou" value="caribou">Caribou</option>
              <option data-pol="+" data-item="carrier" value="carrier">Carrier</option>
              <option data-pol="+" data-item="cat" value="cat">Cat</option>
              <option data-pol="+" data-item="centaur" value="centaur">Centaur</option>
              <option data-pol="+" data-item="cephalid" value="cephalid">Cephalid</option>
              <option data-pol="+" data-item="chameleon" value="chameleon">Chameleon</option>
              <option data-pol="+" data-item="chicken" value="chicken">Chicken</option>
              <option data-pol="+" data-item="child" value="child">Child</option>
              <option data-pol="+" data-item="chimera" value="chimera">Chimera</option>
              <option data-pol="+" data-item="citizen" value="citizen">Citizen</option>
              <option data-pol="+" data-item="clamfolk" value="clamfolk">Clamfolk</option>
              <option data-pol="+" data-item="cleric" value="cleric">Cleric</option>
              <option data-pol="+" data-item="clown" value="clown">Clown</option>
              <option data-pol="+" data-item="cockatrice" value="cockatrice">Cockatrice</option>
              <option data-pol="+" data-item="construct" value="construct">Construct</option>
              <option data-pol="+" data-item="cow" value="cow">Cow</option>
              <option data-pol="+" data-item="coward" value="coward">Coward</option>
              <option data-pol="+" data-item="crab" value="crab">Crab</option>
              <option data-pol="+" data-item="crocodile" value="crocodile">Crocodile</option>
              <option data-pol="+" data-item="custodes" value="custodes">Custodes</option>
              <option data-pol="+" data-item="cyborg" value="cyborg">Cyborg</option>
              <option data-pol="+" data-item="cyclops" value="cyclops">Cyclops</option>
              <option data-pol="+" data-item="dauthi" value="dauthi">Dauthi</option>
              <option data-pol="+" data-item="deer" value="deer">Deer</option>
              <option data-pol="+" data-item="demigod" value="demigod">Demigod</option>
              <option data-pol="+" data-item="demon" value="demon">Demon</option>
              <option data-pol="+" data-item="deserter" value="deserter">Deserter</option>
              <option data-pol="+" data-item="designer" value="designer">Designer</option>
              <option data-pol="+" data-item="devil" value="devil">Devil</option>
              <option data-pol="+" data-item="dinosaur" value="dinosaur">Dinosaur</option>
              <option data-pol="+" data-item="djinn" value="djinn">Djinn</option>
              <option data-pol="+" data-item="dog" value="dog">Dog</option>
              <option data-pol="+" data-item="donkey" value="donkey">Donkey</option>
              <option data-pol="+" data-item="dragon" value="dragon">Dragon</option>
              <option data-pol="+" data-item="drake" value="drake">Drake</option>
              <option data-pol="+" data-item="dreadnought" value="dreadnought">Dreadnought</option>
              <option data-pol="+" data-item="drone" value="drone">Drone</option>
              <option data-pol="+" data-item="druid" value="druid">Druid</option>
              <option data-pol="+" data-item="dryad" value="dryad">Dryad</option>
              <option data-pol="+" data-item="dwarf" value="dwarf">Dwarf</option>
              <option data-pol="+" data-item="efreet" value="efreet">Efreet</option>
              <option data-pol="+" data-item="egg" value="egg">Egg</option>
              <option data-pol="+" data-item="elder" value="elder">Elder</option>
              <option data-pol="+" data-item="eldrazi" value="eldrazi">Eldrazi</option>
              <option data-pol="+" data-item="elemental" value="elemental">Elemental</option>
              <option data-pol="+" data-item="elemental?" value="elemental?">Elemental?</option>
              <option data-pol="+" data-item="elephant" value="elephant">Elephant</option>
              <option data-pol="+" data-item="elf" value="elf">Elf</option>
              <option data-pol="+" data-item="elk" value="elk">Elk</option>
              <option data-pol="+" data-item="elves" value="elves">Elves</option>
              <option data-pol="+" data-item="employee" value="employee">Employee</option>
              <option data-pol="+" data-item="etiquette" value="etiquette">Etiquette</option>
              <option data-pol="+" data-item="eye" value="eye">Eye</option>
              <option data-pol="+" data-item="faerie" value="faerie">Faerie</option>
              <option data-pol="+" data-item="ferret" value="ferret">Ferret</option>
              <option data-pol="+" data-item="fish" value="fish">Fish</option>
              <option data-pol="+" data-item="flagbearer" value="flagbearer">Flagbearer</option>
              <option data-pol="+" data-item="fox" value="fox">Fox</option>
              <option data-pol="+" data-item="fractal" value="fractal">Fractal</option>
              <option data-pol="+" data-item="frog" value="frog">Frog</option>
              <option data-pol="+" data-item="fungus" value="fungus">Fungus</option>
              <option data-pol="+" data-item="gamer" value="gamer">Gamer</option>
              <option data-pol="+" data-item="gargoyle" value="gargoyle">Gargoyle</option>
              <option data-pol="+" data-item="germ" value="germ">Germ</option>
              <option data-pol="+" data-item="giant" value="giant">Giant</option>
              <option data-pol="+" data-item="gith" value="gith">Gith</option>
              <option data-pol="+" data-item="gnoll" value="gnoll">Gnoll</option>
              <option data-pol="+" data-item="gnome" value="gnome">Gnome</option>
              <option data-pol="+" data-item="goat" value="goat">Goat</option>
              <option data-pol="+" data-item="goblin" value="goblin">Goblin</option>
              <option data-pol="+" data-item="god" value="god">God</option>
              <option data-pol="+" data-item="golem" value="golem">Golem</option>
              <option data-pol="+" data-item="gorgon" value="gorgon">Gorgon</option>
              <option data-pol="+" data-item="grandchild" value="grandchild">Grandchild</option>
              <option data-pol="+" data-item="graveborn" value="graveborn">Graveborn</option>
              <option data-pol="+" data-item="gremlin" value="gremlin">Gremlin</option>
              <option data-pol="+" data-item="griffin" value="griffin">Griffin</option>
              <option data-pol="+" data-item="guest" value="guest">Guest</option>
              <option data-pol="+" data-item="gus" value="gus">Gus</option>
              <option data-pol="+" data-item="hag" value="hag">Hag</option>
              <option data-pol="+" data-item="halfling" value="halfling">Halfling</option>
              <option data-pol="+" data-item="hamster" value="hamster">Hamster</option>
              <option data-pol="+" data-item="harpy" value="harpy">Harpy</option>
              <option data-pol="+" data-item="hatificer" value="hatificer">Hatificer</option>
              <option data-pol="+" data-item="head" value="head">Head</option>
              <option data-pol="+" data-item="hellion" value="hellion">Hellion</option>
              <option data-pol="+" data-item="hero" value="hero">Hero</option>
              <option data-pol="+" data-item="hippo" value="hippo">Hippo</option>
              <option data-pol="+" data-item="hippogriff" value="hippogriff">Hippogriff</option>
              <option data-pol="+" data-item="homarid" value="homarid">Homarid</option>
              <option data-pol="+" data-item="homunculus" value="homunculus">Homunculus</option>
              <option data-pol="+" data-item="hornet" value="hornet">Hornet</option>
              <option data-pol="+" data-item="horror" value="horror">Horror</option>
              <option data-pol="+" data-item="horse" value="horse">Horse</option>
              <option data-pol="+" data-item="human" value="human">Human</option>
              <option data-pol="+" data-item="hydra" value="hydra">Hydra</option>
              <option data-pol="+" data-item="hyena" value="hyena">Hyena</option>
              <option data-pol="+" data-item="illusion" value="illusion">Illusion</option>
              <option data-pol="+" data-item="imp" value="imp">Imp</option>
              <option data-pol="+" data-item="incarnation" value="incarnation">Incarnation</option>
              <option data-pol="+" data-item="inkling" value="inkling">Inkling</option>
              <option data-pol="+" data-item="inquisitor" value="inquisitor">Inquisitor</option>
              <option data-pol="+" data-item="insect" value="insect">Insect</option>
              <option data-pol="+" data-item="jackal" value="jackal">Jackal</option>
              <option data-pol="+" data-item="jellyfish" value="jellyfish">Jellyfish</option>
              <option data-pol="+" data-item="juggernaut" value="juggernaut">Juggernaut</option>
              <option data-pol="+" data-item="kangaroo" value="kangaroo">Kangaroo</option>
              <option data-pol="+" data-item="kavu" value="kavu">Kavu</option>
              <option data-pol="+" data-item="killbot" value="killbot">Killbot</option>
              <option data-pol="+" data-item="kirin" value="kirin">Kirin</option>
              <option data-pol="+" data-item="kithkin" value="kithkin">Kithkin</option>
              <option data-pol="+" data-item="knight" value="knight">Knight</option>
              <option data-pol="+" data-item="kobold" value="kobold">Kobold</option>
              <option data-pol="+" data-item="kor" value="kor">Kor</option>
              <option data-pol="+" data-item="kraken" value="kraken">Kraken</option>
              <option data-pol="+" data-item="lady" value="lady">Lady</option>
              <option data-pol="+" data-item="lamia" value="lamia">Lamia</option>
              <option data-pol="+" data-item="lammasu" value="lammasu">Lammasu</option>
              <option data-pol="+" data-item="leech" value="leech">Leech</option>
              <option data-pol="+" data-item="leviathan" value="leviathan">Leviathan</option>
              <option data-pol="+" data-item="lhurgoyf" value="lhurgoyf">Lhurgoyf</option>
              <option data-pol="+" data-item="licid" value="licid">Licid</option>
              <option data-pol="+" data-item="lizard" value="lizard">Lizard</option>
              <option data-pol="+" data-item="lobster" value="lobster">Lobster</option>
              <option data-pol="+" data-item="mammoth" value="mammoth">Mammoth</option>
              <option data-pol="+" data-item="manticore" value="manticore">Manticore</option>
              <option data-pol="+" data-item="masticore" value="masticore">Masticore</option>
              <option data-pol="+" data-item="mercenary" value="mercenary">Mercenary</option>
              <option data-pol="+" data-item="merfolk" value="merfolk">Merfolk</option>
              <option data-pol="+" data-item="metathran" value="metathran">Metathran</option>
              <option data-pol="+" data-item="mime" value="mime">Mime</option>
              <option data-pol="+" data-item="minion" value="minion">Minion</option>
              <option data-pol="+" data-item="minotaur" value="minotaur">Minotaur</option>
              <option data-pol="+" data-item="mite" value="mite">Mite</option>
              <option data-pol="+" data-item="mole" value="mole">Mole</option>
              <option data-pol="+" data-item="monger" value="monger">Monger</option>
              <option data-pol="+" data-item="mongoose" value="mongoose">Mongoose</option>
              <option data-pol="+" data-item="monk" value="monk">Monk</option>
              <option data-pol="+" data-item="monkey" value="monkey">Monkey</option>
              <option data-pol="+" data-item="moonfolk" value="moonfolk">Moonfolk</option>
              <option data-pol="+" data-item="mouse" value="mouse">Mouse</option>
              <option data-pol="+" data-item="mummy" value="mummy">Mummy</option>
              <option data-pol="+" data-item="mutant" value="mutant">Mutant</option>
              <option data-pol="+" data-item="myr" value="myr">Myr</option>
              <option data-pol="+" data-item="mystic" value="mystic">Mystic</option>
              <option data-pol="+" data-item="naga" value="naga">Naga</option>
              <option data-pol="+" data-item="nastiest," value="nastiest,">Nastiest,</option>
              <option data-pol="+" data-item="nautilus" value="nautilus">Nautilus</option>
              <option data-pol="+" data-item="necron" value="necron">Necron</option>
              <option data-pol="+" data-item="nephilim" value="nephilim">Nephilim</option>
              <option data-pol="+" data-item="nightmare" value="nightmare">Nightmare</option>
              <option data-pol="+" data-item="nightstalker" value="nightstalker">Nightstalker</option>
              <option data-pol="+" data-item="ninja" value="ninja">Ninja</option>
              <option data-pol="+" data-item="noble" value="noble">Noble</option>
              <option data-pol="+" data-item="noggle" value="noggle">Noggle</option>
              <option data-pol="+" data-item="nomad" value="nomad">Nomad</option>
              <option data-pol="+" data-item="nymph" value="nymph">Nymph</option>
              <option data-pol="+" data-item="octopus" value="octopus">Octopus</option>
              <option data-pol="+" data-item="ogre" value="ogre">Ogre</option>
              <option data-pol="+" data-item="ooze" value="ooze">Ooze</option>
              <option data-pol="+" data-item="orb" value="orb">Orb</option>
              <option data-pol="+" data-item="orc" value="orc">Orc</option>
              <option data-pol="+" data-item="orgg" value="orgg">Orgg</option>
              <option data-pol="+" data-item="otter" value="otter">Otter</option>
              <option data-pol="+" data-item="ouphe" value="ouphe">Ouphe</option>
              <option data-pol="+" data-item="ox" value="ox">Ox</option>
              <option data-pol="+" data-item="oyster" value="oyster">Oyster</option>
              <option data-pol="+" data-item="pangolin" value="pangolin">Pangolin</option>
              <option data-pol="+" data-item="paratrooper" value="paratrooper">Paratrooper</option>
              <option data-pol="+" data-item="peasant" value="peasant">Peasant</option>
              <option data-pol="+" data-item="pegasus" value="pegasus">Pegasus</option>
              <option data-pol="+" data-item="pentavite" value="pentavite">Pentavite</option>
              <option data-pol="+" data-item="performer" value="performer">Performer</option>
              <option data-pol="+" data-item="pest" value="pest">Pest</option>
              <option data-pol="+" data-item="phelddagrif" value="phelddagrif">Phelddagrif</option>
              <option data-pol="+" data-item="phoenix" value="phoenix">Phoenix</option>
              <option data-pol="+" data-item="phyrexian" value="phyrexian">Phyrexian</option>
              <option data-pol="+" data-item="pilot" value="pilot">Pilot</option>
              <option data-pol="+" data-item="pincher" value="pincher">Pincher</option>
              <option data-pol="+" data-item="pirate" value="pirate">Pirate</option>
              <option data-pol="+" data-item="plant" value="plant">Plant</option>
              <option data-pol="+" data-item="porcupine" value="porcupine">Porcupine</option>
              <option data-pol="+" data-item="praetor" value="praetor">Praetor</option>
              <option data-pol="+" data-item="primarch" value="primarch">Primarch</option>
              <option data-pol="+" data-item="prism" value="prism">Prism</option>
              <option data-pol="+" data-item="processor" value="processor">Processor</option>
              <option data-pol="+" data-item="proper" value="proper">Proper</option>
              <option data-pol="+" data-item="rabbit" value="rabbit">Rabbit</option>
              <option data-pol="+" data-item="raccoon" value="raccoon">Raccoon</option>
              <option data-pol="+" data-item="ranger" value="ranger">Ranger</option>
              <option data-pol="+" data-item="rat" value="rat">Rat</option>
              <option data-pol="+" data-item="rebel" value="rebel">Rebel</option>
              <option data-pol="+" data-item="reflection" value="reflection">Reflection</option>
              <option data-pol="+" data-item="reveler" value="reveler">Reveler</option>
              <option data-pol="+" data-item="rhino" value="rhino">Rhino</option>
              <option data-pol="+" data-item="rigger" value="rigger">Rigger</option>
              <option data-pol="+" data-item="robot" value="robot">Robot</option>
              <option data-pol="+" data-item="rogue" value="rogue">Rogue</option>
              <option data-pol="+" data-item="sable" value="sable">Sable</option>
              <option data-pol="+" data-item="salamander" value="salamander">Salamander</option>
              <option data-pol="+" data-item="samurai" value="samurai">Samurai</option>
              <option data-pol="+" data-item="sand" value="sand">Sand</option>
              <option data-pol="+" data-item="saproling" value="saproling">Saproling</option>
              <option data-pol="+" data-item="satyr" value="satyr">Satyr</option>
              <option data-pol="+" data-item="scarecrow" value="scarecrow">Scarecrow</option>
              <option data-pol="+" data-item="scientist" value="scientist">Scientist</option>
              <option data-pol="+" data-item="scion" value="scion">Scion</option>
              <option data-pol="+" data-item="scorpion" value="scorpion">Scorpion</option>
              <option data-pol="+" data-item="scout" value="scout">Scout</option>
              <option data-pol="+" data-item="sculpture" value="sculpture">Sculpture</option>
              <option data-pol="+" data-item="serf" value="serf">Serf</option>
              <option data-pol="+" data-item="serpent" value="serpent">Serpent</option>
              <option data-pol="+" data-item="servo" value="servo">Servo</option>
              <option data-pol="+" data-item="shade" value="shade">Shade</option>
              <option data-pol="+" data-item="shaman" value="shaman">Shaman</option>
              <option data-pol="+" data-item="shapeshifter" value="shapeshifter">Shapeshifter</option>
              <option data-pol="+" data-item="shark" value="shark">Shark</option>
              <option data-pol="+" data-item="sheep" value="sheep">Sheep</option>
              <option data-pol="+" data-item="ship" value="ship">Ship</option>
              <option data-pol="+" data-item="siren" value="siren">Siren</option>
              <option data-pol="+" data-item="skeleton" value="skeleton">Skeleton</option>
              <option data-pol="+" data-item="slith" value="slith">Slith</option>
              <option data-pol="+" data-item="sliver" value="sliver">Sliver</option>
              <option data-pol="+" data-item="slug" value="slug">Slug</option>
              <option data-pol="+" data-item="snake" value="snake">Snake</option>
              <option data-pol="+" data-item="soldier" value="soldier">Soldier</option>
              <option data-pol="+" data-item="soltari" value="soltari">Soltari</option>
              <option data-pol="+" data-item="spawn" value="spawn">Spawn</option>
              <option data-pol="+" data-item="specter" value="specter">Specter</option>
              <option data-pol="+" data-item="spellshaper" value="spellshaper">Spellshaper</option>
              <option data-pol="+" data-item="sphinx" value="sphinx">Sphinx</option>
              <option data-pol="+" data-item="spider" value="spider">Spider</option>
              <option data-pol="+" data-item="spike" value="spike">Spike</option>
              <option data-pol="+" data-item="spirit" value="spirit">Spirit</option>
              <option data-pol="+" data-item="splinter" value="splinter">Splinter</option>
              <option data-pol="+" data-item="sponge" value="sponge">Sponge</option>
              <option data-pol="+" data-item="spy" value="spy">Spy</option>
              <option data-pol="+" data-item="squid" value="squid">Squid</option>
              <option data-pol="+" data-item="squirrel" value="squirrel">Squirrel</option>
              <option data-pol="+" data-item="starfish" value="starfish">Starfish</option>
              <option data-pol="+" data-item="surrakar" value="surrakar">Surrakar</option>
              <option data-pol="+" data-item="survivor" value="survivor">Survivor</option>
              <option data-pol="+" data-item="teddy" value="teddy">Teddy</option>
              <option data-pol="+" data-item="tentacle" value="tentacle">Tentacle</option>
              <option data-pol="+" data-item="tetravite" value="tetravite">Tetravite</option>
              <option data-pol="+" data-item="thalakos" value="thalakos">Thalakos</option>
              <option data-pol="+" data-item="the" value="the">The</option>
              <option data-pol="+" data-item="thopter" value="thopter">Thopter</option>
              <option data-pol="+" data-item="thrull" value="thrull">Thrull</option>
              <option data-pol="+" data-item="tiefling" value="tiefling">Tiefling</option>
              <option data-pol="+" data-item="townsfolk" value="townsfolk">Townsfolk</option>
              <option data-pol="+" data-item="treefolk" value="treefolk">Treefolk</option>
              <option data-pol="+" data-item="trilobite" value="trilobite">Trilobite</option>
              <option data-pol="+" data-item="triskelavite" value="triskelavite">Triskelavite</option>
              <option data-pol="+" data-item="troll" value="troll">Troll</option>
              <option data-pol="+" data-item="turtle" value="turtle">Turtle</option>
              <option data-pol="+" data-item="tyranid" value="tyranid">Tyranid</option>
              <option data-pol="+" data-item="unicorn" value="unicorn">Unicorn</option>
              <option data-pol="+" data-item="vampire" value="vampire">Vampire</option>
              <option data-pol="+" data-item="vampyre" value="vampyre">Vampyre</option>
              <option data-pol="+" data-item="vedalken" value="vedalken">Vedalken</option>
              <option data-pol="+" data-item="viashino" value="viashino">Viashino</option>
              <option data-pol="+" data-item="villain" value="villain">Villain</option>
              <option data-pol="+" data-item="volver" value="volver">Volver</option>
              <option data-pol="+" data-item="waiter" value="waiter">Waiter</option>
              <option data-pol="+" data-item="wall" value="wall">Wall</option>
              <option data-pol="+" data-item="walrus" value="walrus">Walrus</option>
              <option data-pol="+" data-item="warlock" value="warlock">Warlock</option>
              <option data-pol="+" data-item="warrior" value="warrior">Warrior</option>
              <option data-pol="+" data-item="wasp" value="wasp">Wasp</option>
              <option data-pol="+" data-item="weird" value="weird">Weird</option>
              <option data-pol="+" data-item="werewolf" value="werewolf">Werewolf</option>
              <option data-pol="+" data-item="whale" value="whale">Whale</option>
              <option data-pol="+" data-item="wizard" value="wizard">Wizard</option>
              <option data-pol="+" data-item="wolf" value="wolf">Wolf</option>
              <option data-pol="+" data-item="wolverine" value="wolverine">Wolverine</option>
              <option data-pol="+" data-item="wombat" value="wombat">Wombat</option>
              <option data-pol="+" data-item="worm" value="worm">Worm</option>
              <option data-pol="+" data-item="wraith" value="wraith">Wraith</option>
              <option data-pol="+" data-item="wrestler" value="wrestler">Wrestler</option>
              <option data-pol="+" data-item="wurm" value="wurm">Wurm</option>
              <option data-pol="+" data-item="yeti" value="yeti">Yeti</option>
              <option data-pol="+" data-item="zombie" value="zombie">Zombie</option>
              <option data-pol="+" data-item="zubera" value="zubera">Zubera</option>
              <option data-pol="+" data-item="human" value="human">human</option>
              <option data-pol="+" data-item="knight" value="knight">knight</option></optgroup><optgroup label="Planar Types"><option data-pol="+" data-item="alara" value="alara">Alara</option>
              <option data-pol="+" data-item="amonkhet" value="amonkhet">Amonkhet</option>
              <option data-pol="+" data-item="antausia" value="antausia">Antausia</option>
              <option data-pol="+" data-item="arcavios" value="arcavios">Arcavios</option>
              <option data-pol="+" data-item="arkhos" value="arkhos">Arkhos</option>
              <option data-pol="+" data-item="azgol" value="azgol">Azgol</option>
              <option data-pol="+" data-item="belenon" value="belenon">Belenon</option>
              <option data-pol="+" data-item="bolas's meditation realm" value="bolas's meditation realm">Bolas's Meditation Realm</option>
              <option data-pol="+" data-item="capenna" value="capenna">Capenna</option>
              <option data-pol="+" data-item="cridhe" value="cridhe">Cridhe</option>
              <option data-pol="+" data-item="dominaria" value="dominaria">Dominaria</option>
              <option data-pol="+" data-item="echoir" value="echoir">Echoir</option>
              <option data-pol="+" data-item="eldraine" value="eldraine">Eldraine</option>
              <option data-pol="+" data-item="equilor" value="equilor">Equilor</option>
              <option data-pol="+" data-item="ergamon" value="ergamon">Ergamon</option>
              <option data-pol="+" data-item="fabacin" value="fabacin">Fabacin</option>
              <option data-pol="+" data-item="fiora" value="fiora">Fiora</option>
              <option data-pol="+" data-item="gargantikar" value="gargantikar">Gargantikar</option>
              <option data-pol="+" data-item="gobakhan" value="gobakhan">Gobakhan</option>
              <option data-pol="+" data-item="ikoria" value="ikoria">Ikoria</option>
              <option data-pol="+" data-item="innistrad" value="innistrad">Innistrad</option>
              <option data-pol="+" data-item="iquatana" value="iquatana">Iquatana</option>
              <option data-pol="+" data-item="ir" value="ir">Ir</option>
              <option data-pol="+" data-item="ixalan" value="ixalan">Ixalan</option>
              <option data-pol="+" data-item="kaladesh" value="kaladesh">Kaladesh</option>
              <option data-pol="+" data-item="kaldheim" value="kaldheim">Kaldheim</option>
              <option data-pol="+" data-item="kamigawa" value="kamigawa">Kamigawa</option>
              <option data-pol="+" data-item="karsus" value="karsus">Karsus</option>
              <option data-pol="+" data-item="kephalai" value="kephalai">Kephalai</option>
              <option data-pol="+" data-item="kinshala" value="kinshala">Kinshala</option>
              <option data-pol="+" data-item="kolbahan" value="kolbahan">Kolbahan</option>
              <option data-pol="+" data-item="kylem" value="kylem">Kylem</option>
              <option data-pol="+" data-item="kyneth" value="kyneth">Kyneth</option>
              <option data-pol="+" data-item="lorwyn" value="lorwyn">Lorwyn</option>
              <option data-pol="+" data-item="luvion" value="luvion">Luvion</option>
              <option data-pol="+" data-item="mercadia" value="mercadia">Mercadia</option>
              <option data-pol="+" data-item="mirrodin" value="mirrodin">Mirrodin</option>
              <option data-pol="+" data-item="moag" value="moag">Moag</option>
              <option data-pol="+" data-item="mongseng" value="mongseng">Mongseng</option>
              <option data-pol="+" data-item="muraganda" value="muraganda">Muraganda</option>
              <option data-pol="+" data-item="new phyrexia" value="new phyrexia">New Phyrexia</option>
              <option data-pol="+" data-item="phyrexia" value="phyrexia">Phyrexia</option>
              <option data-pol="+" data-item="pyrulea" value="pyrulea">Pyrulea</option>
              <option data-pol="+" data-item="rabiah" value="rabiah">Rabiah</option>
              <option data-pol="+" data-item="rath" value="rath">Rath</option>
              <option data-pol="+" data-item="ravnica" value="ravnica">Ravnica</option>
              <option data-pol="+" data-item="regatha" value="regatha">Regatha</option>
              <option data-pol="+" data-item="segovia" value="segovia">Segovia</option>
              <option data-pol="+" data-item="serra’s realm" value="serra’s realm">Serra’s Realm</option>
              <option data-pol="+" data-item="shadowmoor" value="shadowmoor">Shadowmoor</option>
              <option data-pol="+" data-item="shandalar" value="shandalar">Shandalar</option>
              <option data-pol="+" data-item="shenmeng" value="shenmeng">Shenmeng</option>
              <option data-pol="+" data-item="tarkir" value="tarkir">Tarkir</option>
              <option data-pol="+" data-item="the abyss" value="the abyss">The Abyss</option>
              <option data-pol="+" data-item="the library" value="the library">The Library</option>
              <option data-pol="+" data-item="theros" value="theros">Theros</option>
              <option data-pol="+" data-item="ulgrotha" value="ulgrotha">Ulgrotha</option>
              <option data-pol="+" data-item="valla" value="valla">Valla</option>
              <option data-pol="+" data-item="vryn" value="vryn">Vryn</option>
              <option data-pol="+" data-item="wildfire" value="wildfire">Wildfire</option>
              <option data-pol="+" data-item="xerex" value="xerex">Xerex</option>
              <option data-pol="+" data-item="zendikar" value="zendikar">Zendikar</option>
              <option data-pol="+" data-item="zhalfir" value="zhalfir">Zhalfir</option></optgroup></select>


          <div className='filters-button'>
            <button type='submit'>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sidenav;
