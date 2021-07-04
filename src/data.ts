import { RESTDataSource } from 'apollo-datasource-rest';

export default class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async berry(id: number | string) {
    return this.get(`/berry/${id}`);
  }

  async berryList(limit: number, offset: number) {
    return this.get('/berry', {
      limit,
      offset
    });
  }

  async berryFirmness(id: number | string) {
    return this.get(`/berry-firmness/${id}`);
  }

  async berryFirmnessList(limit: number, offset: number) {
    return this.get('/berry-firmness', {
      limit,
      offset
    });
  }

  async berryFlavor(id: number | string) {
    return this.get(`/berry-flavor/${id}`);
  }

  async berryFlavorList(limit: number, offset: number) {
    return this.get('/berry-flavor', {
      limit,
      offset
    });
  }

  async contestType(id: number | string) {
    return this.get(`/contest-type/${id}`);
  }

  async contestTypeList(limit: number, offset: number) {
    return this.get('/contest-type', {
      limit,
      offset
    });
  }

  async contestEffect(id: number | string) {
    return this.get(`/contest-effect/${id}`);
  }

  async contestEffectList(limit: number, offset: number) {
    return this.get('/contest-effect', {
      limit,
      offset
    });
  }

  async superContestEffect(id: number | string) {
    return this.get(`/super-contest-effect/${id}`);
  }

  async superContestEffectList(limit: number, offset: number) {
    return this.get('/super-contest-effect', {
      limit,
      offset
    });
  }

  async encounterMethod(id: number | string) {
    return this.get(`/encounter-method/${id}`);
  }

  async encounterMethodList(limit: number, offset: number) {
    return this.get('/encounter-method', {
      limit,
      offset
    });
  }

  async encounterCondition(id: number | string) {
    return this.get(`/encounter-condition/${id}`);
  }

  async encounterConditionList(limit: number, offset: number) {
    return this.get('/encounter-condition', {
      limit,
      offset
    });
  }

  async encounterConditionValue(id: number | string) {
    return this.get(`/encounter-condition-value/${id}`);
  }

  async encounterConditionValueList(limit: number, offset: number) {
    return this.get('/encounter-condition-value', {
      limit,
      offset
    });
  }

  async evolutionChain(id: number | string) {
    return this.get(`/evolution-chain/${id}`);
  }

  async evolutionChainList(limit: number, offset: number) {
    return this.get('/evolution-chain', {
      limit,
      offset
    });
  }

  async evolutionTrigger(id: number | string) {
    return this.get(`/evolution-trigger/${id}`);
  }

  async evolutionTriggerList(limit: number, offset: number) {
    return this.get('/evolution-trigger', {
      limit,
      offset
    });
  }

  async generation(id: number | string) {
    return this.get(`/generation/${id}`);
  }

  async generationList(limit: number, offset: number) {
    return this.get('/generation', {
      limit,
      offset
    });
  }

  async pokedex(id: number | string) {
    return this.get(`/pokedex/${id}`);
  }

  async pokedexList(limit: number, offset: number) {
    return this.get('/pokedex', {
      limit,
      offset
    });
  }

  async version(id: number | string) {
    return this.get(`/version/${id}`);
  }

  async versionList(limit: number, offset: number) {
    return this.get('/version', {
      limit,
      offset
    });
  }

  async versionGroup(id: number | string) {
    return this.get(`/version-group/${id}`);
  }

  async versionGroupList(limit: number, offset: number) {
    return this.get('/version-group', {
      limit,
      offset
    });
  }

  async item(id: number | string) {
    return this.get(`/item/${id}`);
  }

  async itemList(limit: number, offset: number) {
    return this.get('/item', {
      limit,
      offset
    });
  }

  async itemAttribute(id: number | string) {
    return this.get(`/item-attribute/${id}`);
  }

  async itemAttributeList(limit: number, offset: number) {
    return this.get('/item-attribute', {
      limit,
      offset
    });
  }

  async itemCategory(id: number | string) {
    return this.get(`/item-category/${id}`);
  }

  async itemCategoryList(limit: number, offset: number) {
    return this.get('/item-category', {
      limit,
      offset
    });
  }

  async itemFlingEffect(id: number | string) {
    return this.get(`/item-fling-effect/${id}`);
  }

  async itemFlingEffectList(limit: number, offset: number) {
    return this.get('/item-fling-effect', {
      limit,
      offset
    });
  }

  async itemPocket(id: number | string) {
    return this.get(`/item-pocket/${id}`);
  }

  async itemPocketList(limit: number, offset: number) {
    return this.get('/item-pocket', {
      limit,
      offset
    });
  }

  async location(id: number | string) {
    return this.get(`/location/${id}`);
  }

  async locationList(limit: number, offset: number) {
    return this.get('/location', {
      limit,
      offset
    });
  }

  async locationArea(id: number | string) {
    return this.get(`/location-area/${id}`);
  }

  async locationAreaList(limit: number, offset: number) {
    return this.get('/location-area', {
      limit,
      offset
    });
  }

  async palParkArea(id: number | string) {
    return this.get(`/pal-park-area/${id}`);
  }

  async palParkAreaList(limit: number, offset: number) {
    return this.get('/pal-park-area', {
      limit,
      offset
    });
  }

  async region(id: number | string) {
    return this.get(`/region/${id}`);
  }

  async regionList(limit: number, offset: number) {
    return this.get('/region', {
      limit,
      offset
    });
  }

  async machine(id: number | string) {
    return this.get(`/machine/${id}`);
  }

  async machineList(limit: number, offset: number) {
    return this.get('/machine', {
      limit,
      offset
    });
  }

  async move(id: number | string) {
    return this.get(`/move/${id}`);
  }

  async moveList(limit: number, offset: number) {
    return this.get('/move', {
      limit,
      offset
    });
  }

  async moveAilment(id: number | string) {
    return this.get(`/move-ailment/${id}`);
  }

  async moveAilmentList(limit: number, offset: number) {
    return this.get('/move-ailment', {
      limit,
      offset
    });
  }

  async moveBattleStyle(id: number | string) {
    return this.get(`/move-battle-style/${id}`);
  }

  async moveBattleStyleList(limit: number, offset: number) {
    return this.get('/move-battle-style', {
      limit,
      offset
    });
  }

  async moveCategory(id: number | string) {
    return this.get(`/move-category/${id}`);
  }

  async moveCategoryList(limit: number, offset: number) {
    return this.get('/move-category', {
      limit,
      offset
    });
  }

  async moveDamageClass(id: number | string) {
    return this.get(`/move-damage-class/${id}`);
  }

  async moveDamageClassList(limit: number, offset: number) {
    return this.get('/move-damage-class', {
      limit,
      offset
    });
  }

  async moveLearnMethod(id: number | string) {
    return this.get(`/move-learn-method/${id}`);
  }

  async moveLearnMethodList(limit: number, offset: number) {
    return this.get('/move-learn-method', {
      limit,
      offset
    });
  }

  async moveTarget(id: number | string) {
    return this.get(`/move-target/${id}`);
  }

  async moveTargetList(limit: number, offset: number) {
    return this.get('/move-target', {
      limit,
      offset
    });
  }

  async ability(id: number | string) {
    return this.get(`/ability/${id}`);
  }

  async abilityList(limit: number, offset: number) {
    return this.get('/ability', {
      limit,
      offset
    });
  }

  async characteristic(id: number | string) {
    return this.get(`/characteristic/${id}`);
  }

  async characteristicList(limit: number, offset: number) {
    return this.get('/characteristic', {
      limit,
      offset
    });
  }

  async eggGroup(id: number | string) {
    return this.get(`/egg-group/${id}`);
  }

  async eggGroupList(limit: number, offset: number) {
    return this.get('/egg-group', {
      limit,
      offset
    });
  }

  async gender(id: number | string) {
    return this.get(`/gender/${id}`);
  }

  async genderList(limit: number, offset: number) {
    return this.get('/gender', {
      limit,
      offset
    });
  }

  async growthRate(id: number | string) {
    return this.get(`/growth-rate/${id}`);
  }

  async growthRateList(limit: number, offset: number) {
    return this.get('/growth-rate', {
      limit,
      offset
    });
  }

  async nature(id: number | string) {
    return this.get(`/nature/${id}`);
  }

  async natureList(limit: number, offset: number) {
    return this.get('/nature', {
      limit,
      offset
    });
  }

  async pokeathlonStat(id: number | string) {
    return this.get(`/pokeathlon-stat/${id}`);
  }

  async pokeathlonStatList(limit: number, offset: number) {
    return this.get('/pokeathlon-stat', {
      limit,
      offset
    });
  }

  async pokemon(id: number | string) {
    return this.get(`/pokemon/${id}`);
  }

  async pokemonList(limit: number, offset: number) {
    return await this.get('/pokemon', {
      limit,
      offset
    });
  }

  async pokemonEncounters(id: number | string) {
    return this.get(`/pokemon/${id}/encounters`);
  }

  async pokemonColor(id: number | string) {
    return this.get(`/pokemon-color/${id}`);
  }

  async pokemonColorList(limit: number, offset: number) {
    return await this.get('/pokemon-color', {
      limit,
      offset
    });
  }

  async pokemonForm(id: number | string) {
    return this.get(`/pokemon-form/${id}`);
  }

  async pokemonFormList(limit: number, offset: number) {
    return await this.get('/pokemon-form', {
      limit,
      offset
    });
  }

  async pokemonHabitat(id: number | string) {
    return this.get(`/pokemon-habitat/${id}`);
  }

  async pokemonHabitatList(limit: number, offset: number) {
    return await this.get('/pokemon-habitat', {
      limit,
      offset
    });
  }

  async pokemonShape(id: number | string) {
    return this.get(`/pokemon-shape/${id}`);
  }

  async pokemonShapeList(limit: number, offset: number) {
    return await this.get('/pokemon-shape', {
      limit,
      offset
    });
  }

  async pokemonSpecies(id: number | string) {
    return this.get(`/pokemon-species/${id}`);
  }

  async pokemonSpeciesList(limit: number, offset: number) {
    return await this.get('/pokemon-species', {
      limit,
      offset
    });
  }

  async stat(id: number | string) {
    return this.get(`/stat/${id}`);
  }

  async statList(limit: number, offset: number) {
    return await this.get('/stat', {
      limit,
      offset
    });
  }

  async type(id: number | string) {
    return this.get(`/type/${id}`);
  }

  async typeList(limit: number, offset: number) {
    return this.get('/type', {
      limit,
      offset
    });
  }

  async language(id: number | string) {
    return this.get(`/language/${id}`);
  }

  async languageList(limit: number, offset: number) {
    return this.get('/language', {
      limit,
      offset
    });
  }
}
