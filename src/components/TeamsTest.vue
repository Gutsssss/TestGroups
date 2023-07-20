<template>
  <div class="card">
    <DataTable
      v-on:row-dblclick="(data) => add(data)"
      :value="filteredPlayers"
      tableStyle="min-width: 50rem"
    >
      <Column field="name" header="Name">
        <template #body="slotProps">
          {{ slotProps.data.name }}
        </template>
      </Column>
      <Column field="id" header="id">
        <template #body="slotProps">
          {{ slotProps.data.id }}
        </template>
      </Column>
      <Column field="surname" header="surname">
        <template #body="slotProps">
          {{ slotProps.data.surname }}
        </template>
      </Column>
      <Column field="birthday" header="birthday">
        <template #body="slotProps">
          {{ slotProps.data.birthday }}
        </template>
      </Column>
    </DataTable>
    <Panel class="card-group" header="Group 1">
      <p v-for="player in Groups.group1" v-on:dblclick="del(player)">
        {{ player.name }} {{ player.surname }}
      </p>
    </Panel>
    <Panel class="card-group" header="Group 2">
      <p v-for="player in Groups.group2" v-on:dblclick="del(player)">
        {{ player.name }} {{ player.surname }}
      </p>
    </Panel>
    <Panel class="card-group" header="Group 3">
      <p v-for="player in Groups.group3" v-on:dblclick="del(player)">
        {{ player.name }} {{ player.surname }}
      </p>
    </Panel>
    <ToggleButton offLabel="Save" class="button" :disabled="stateButton" @click="saveGroups()"></ToggleButton>
    
  </div>
  <div><p>{{ savedGroups }}</p></div>
</template>

<script setup>
import { ref, computed } from "vue";
import { players } from "../constants/Players";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import ToggleButton from 'primevue/togglebutton';
import Panel from 'primevue/panel';

const add = (data) => {
  for(let i in Groups.value)
  if (Groups.value[i].length < 3) {
    Groups.value[i].push(data.data);
    usedPlayers.value.push(data.data.id)
    return;
  }
};

const del = (data) => {
  for(let i in Groups.value)
  Groups.value[i].forEach((x) => {
    if (JSON.stringify(x) === JSON.stringify(data)) {
      Groups.value[i].splice(Groups.value[i].indexOf(data), 1);
      usedPlayers.value.splice(usedPlayers.value.indexOf(data.id), 1)
    }
  });
};

const filteredPlayers = computed(() => {
    return players.reduce((acc,val) => {
        if(!usedPlayers.value.includes(val.id)) {
            acc = [...acc, val]
            return acc
        }
        return acc
    },[]).sort((a,b) => {
        if(a.name < b.name ) return -1
        if(a.name > b.name ) return 1
        return 0 
    })
});

const usedPlayers = ref([])

const Groups = ref({
  group1: [],
  group2: [],
  group3: [],
});
const saveGroups = () => {
  for(let i in Groups.value)
   Groups.value[i].map((x) => {
    let restult = savedGroups.value.push({player_id:x.id,
            group_id:i})
    })
    console.log(1)
}

const stateButton = computed(() => {
    if(usedPlayers.value.length === 9) return false
    return true
})



const savedGroups = ref([])
</script>

<style scoped>
.card {
  display: flex;
  gap: 10px;
}
.card-group {

  height: fit-content;
  padding: 20px;
}
.button {
    width: 100px;
    height: 40px;
}
</style>
