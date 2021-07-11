import { RESTDataSource } from 'apollo-datasource-rest';

export default class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  berry(id: number | string) {
    return this.get(`/berry/${id}`);
  }

  berryList(limit: number, offset: number) {
    return this.get('/berry', {
      limit,
      offset
    });
  }

  berryFirmness(id: number | string) {
    return this.get(`/berry-firmness/${id}`);
  }

  berryFirmnessList(limit: number, offset: number) {
    return this.get('/berry-firmness', {
      limit,
      offset
    });
  }

  berryFlavor(id: number | string) {
    return this.get(`/berry-flavor/${id}`);
  }

  berryFlavorList(limit: number, offset: number) {
    return this.get('/berry-flavor', {
      limit,
      offset
    });
  }

  contestType(id: number | string) {
    return this.get(`/contest-type/${id}`);
  }

  contestTypeList(limit: number, offset: number) {
    return this.get('/contest-type', {
      limit,
      offset
    });
  }

  contestEffect(id: number | string) {
    return this.get(`/contest-effect/${id}`);
  }

  contestEffectList(limit: number, offset: number) {
    return this.get('/contest-effect', {
      limit,
      offset
    });
  }

  superContestEffect(id: number | string) {
    return this.get(`/super-contest-effect/${id}`);
  }

  superContestEffectList(limit: number, offset: number) {
    return this.get('/super-contest-effect', {
      limit,
      offset
    });
  }

  encounterMethod(id: number | string) {
    return this.get(`/encounter-method/${id}`);
  }

  encounterMethodList(limit: number, offset: number) {
    return this.get('/encounter-method', {
      limit,
      offset
    });
  }

  encounterCondition(id: number | string) {
    return this.get(`/encounter-condition/${id}`);
  }

  encounterConditionList(limit: number, offset: number) {
    return this.get('/encounter-condition', {
      limit,
      offset
    });
  }

  encounterConditionValue(id: number | string) {
    return this.get(`/encounter-condition-value/${id}`);
  }

  encounterConditionValueList(limit: number, offset: number) {
    return this.get('/encounter-condition-value', {
      limit,
      offset
    });
  }

  evolutionChain(id: number | string) {
    return this.get(`/evolution-chain/${id}`);
  }

  evolutionChainList(limit: number, offset: number) {
    return this.get('/evolution-chain', {
      limit,
      offset
    });
  }

  evolutionTrigger(id: number | string) {
    return this.get(`/evolution-trigger/${id}`);
  }

  evolutionTriggerList(limit: number, offset: number) {
    return this.get('/evolution-trigger', {
      limit,
      offset
    });
  }

  generation(id: number | string) {
    return this.get(`/generation/${id}`);
  }

  generationList(limit: number, offset: number) {
    return this.get('/generation', {
      limit,
      offset
    });
  }

  pokedex(id: number | string) {
    return this.get(`/pokedex/${id}`);
  }

  pokedexList(limit: number, offset: number) {
    return this.get('/pokedex', {
      limit,
      offset
    });
  }

  version(id: number | string) {
    return this.get(`/version/${id}`);
  }

  versionList(limit: number, offset: number) {
    return this.get('/version', {
      limit,
      offset
    });
  }

  versionGroup(id: number | string) {
    return this.get(`/version-group/${id}`);
  }

  versionGroupList(limit: number, offset: number) {
    return this.get('/version-group', {
      limit,
      offset
    });
  }

  item(id: number | string) {
    return this.get(`/item/${id}`);
  }

  itemList(limit: number, offset: number) {
    return this.get('/item', {
      limit,
      offset
    });
  }

  itemAttribute(id: number | string) {
    return this.get(`/item-attribute/${id}`);
  }

  itemAttributeList(limit: number, offset: number) {
    return this.get('/item-attribute', {
      limit,
      offset
    });
  }

  itemCategory(id: number | string) {
    return this.get(`/item-category/${id}`);
  }

  itemCategoryList(limit: number, offset: number) {
    return this.get('/item-category', {
      limit,
      offset
    });
  }

  itemFlingEffect(id: number | string) {
    return this.get(`/item-fling-effect/${id}`);
  }

  itemFlingEffectList(limit: number, offset: number) {
    return this.get('/item-fling-effect', {
      limit,
      offset
    });
  }

  itemPocket(id: number | string) {
    return this.get(`/item-pocket/${id}`);
  }

  itemPocketList(limit: number, offset: number) {
    return this.get('/item-pocket', {
      limit,
      offset
    });
  }

  location(id: number | string) {
    return this.get(`/location/${id}`);
  }

  locationList(limit: number, offset: number) {
    return this.get('/location', {
      limit,
      offset
    });
  }

  locationArea(id: number | string) {
    return this.get(`/location-area/${id}`);
  }

  locationAreaList(limit: number, offset: number) {
    return this.get('/location-area', {
      limit,
      offset
    });
  }

  palParkArea(id: number | string) {
    return this.get(`/pal-park-area/${id}`);
  }

  palParkAreaList(limit: number, offset: number) {
    return this.get('/pal-park-area', {
      limit,
      offset
    });
  }

  region(id: number | string) {
    return this.get(`/region/${id}`);
  }

  regionList(limit: number, offset: number) {
    return this.get('/region', {
      limit,
      offset
    });
  }

  machine(id: number | string) {
    return this.get(`/machine/${id}`);
  }

  machineList(limit: number, offset: number) {
    return this.get('/machine', {
      limit,
      offset
    });
  }

  move(id: number | string) {
    return this.get(`/move/${id}`);
  }

  moveList(limit: number, offset: number) {
    return this.get('/move', {
      limit,
      offset
    });
  }

  moveAilment(id: number | string) {
    return this.get(`/move-ailment/${id}`);
  }

  moveAilmentList(limit: number, offset: number) {
    return this.get('/move-ailment', {
      limit,
      offset
    });
  }

  moveBattleStyle(id: number | string) {
    return this.get(`/move-battle-style/${id}`);
  }

  moveBattleStyleList(limit: number, offset: number) {
    return this.get('/move-battle-style', {
      limit,
      offset
    });
  }

  moveCategory(id: number | string) {
    return this.get(`/move-category/${id}`);
  }

  moveCategoryList(limit: number, offset: number) {
    return this.get('/move-category', {
      limit,
      offset
    });
  }

  moveDamageClass(id: number | string) {
    return this.get(`/move-damage-class/${id}`);
  }

  moveDamageClassList(limit: number, offset: number) {
    return this.get('/move-damage-class', {
      limit,
      offset
    });
  }

  moveLearnMethod(id: number | string) {
    return this.get(`/move-learn-method/${id}`);
  }

  moveLearnMethodList(limit: number, offset: number) {
    return this.get('/move-learn-method', {
      limit,
      offset
    });
  }

  moveTarget(id: number | string) {
    return this.get(`/move-target/${id}`);
  }

  moveTargetList(limit: number, offset: number) {
    return this.get('/move-target', {
      limit,
      offset
    });
  }

  ability(id: number | string) {
    return this.get(`/ability/${id}`);
  }

  abilityList(limit: number, offset: number) {
    return this.get('/ability', {
      limit,
      offset
    });
  }

  characteristic(id: number | string) {
    return this.get(`/characteristic/${id}`);
  }

  characteristicList(limit: number, offset: number) {
    return this.get('/characteristic', {
      limit,
      offset
    });
  }

  async eggGroup(id: number | string) {
    const x = await this.get(`/egg-group/${id}`);
    console.log(JSON.stringify(x, null, 2), id)
    return x;
  }

  eggGroupList(limit: number, offset: number) {
    return this.get('/egg-group', {
      limit,
      offset
    });
  }

  gender(id: number | string) {
    return this.get(`/gender/${id}`);
  }

  genderList(limit: number, offset: number) {
    return this.get('/gender', {
      limit,
      offset
    });
  }

  growthRate(id: number | string) {
    return this.get(`/growth-rate/${id}`);
  }

  growthRateList(limit: number, offset: number) {
    return this.get('/growth-rate', {
      limit,
      offset
    });
  }

  nature(id: number | string) {
    return this.get(`/nature/${id}`);
  }

  natureList(limit: number, offset: number) {
    return this.get('/nature', {
      limit,
      offset
    });
  }

  pokeathlonStat(id: number | string) {
    return this.get(`/pokeathlon-stat/${id}`);
  }

  pokeathlonStatList(limit: number, offset: number) {
    return this.get('/pokeathlon-stat', {
      limit,
      offset
    });
  }

  pokemon(id: number | string) {
    return this.get(`/pokemon/${id}`);
  }

  pokemonList(limit: number, offset: number) {
    return this.get('/pokemon', {
      limit,
      offset
    });
  }

  pokemonEncounterList(id: number | string) {
    return this.get(`/pokemon/${id}/encounters`);
  }

  pokemonColor(id: number | string) {
    return this.get(`/pokemon-color/${id}`);
  }

  pokemonColorList(limit: number, offset: number) {
    return this.get('/pokemon-color', {
      limit,
      offset
    });
  }

  pokemonForm(id: number | string) {
    return this.get(`/pokemon-form/${id}`);
  }

  pokemonFormList(limit: number, offset: number) {
    return this.get('/pokemon-form', {
      limit,
      offset
    });
  }

  pokemonHabitat(id: number | string) {
    return this.get(`/pokemon-habitat/${id}`);
  }

  pokemonHabitatList(limit: number, offset: number) {
    return this.get('/pokemon-habitat', {
      limit,
      offset
    });
  }

  pokemonShape(id: number | string) {
    return this.get(`/pokemon-shape/${id}`);
  }

  pokemonShapeList(limit: number, offset: number) {
    return this.get('/pokemon-shape', {
      limit,
      offset
    });
  }

  pokemonSpecies(id: number | string) {
    return this.get(`/pokemon-species/${id}`);
  }

  pokemonSpeciesList(limit: number, offset: number) {
    return this.get('/pokemon-species', {
      limit,
      offset
    });
  }

  stat(id: number | string) {
    return this.get(`/stat/${id}`);
  }

  statList(limit: number, offset: number) {
    return this.get('/stat', {
      limit,
      offset
    });
  }

  type(id: number | string) {
    return this.get(`/type/${id}`);
  }

  typeList(limit: number, offset: number) {
    return this.get('/type', {
      limit,
      offset
    });
  }

  language(id: number | string) {
    return this.get(`/language/${id}`);
  }

  languageList(limit: number, offset: number) {
    return this.get('/language', {
      limit,
      offset
    });
  }
}
