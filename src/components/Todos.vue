<template>
<div>
    User: {{$route.params.username}} <br>
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col md="auto">
                <b-button-group>
                    <b-button variant="success" id="showList" @click="showListofTodos">Show List of TO-DO Lists</b-button>
                    <b-button v-b-modal.modal-1>Add New List</b-button>

                    <b-modal id="modal-1" title="Add New List">
                        <b-form-input v-model="postListBody" placeholder="Enter list name"></b-form-input><br>
                        <b-button variant="success" id="addList" @click="addList">Add New List</b-button>

                    </b-modal>

                </b-button-group>
            </b-col>
        </b-row>
    </b-container>

    <br>

    <div id="todoLists" style="display:none">

        <h1 style="text-align: center">List of TO-DO Lists</h1>
        <br>

        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">

                <b-list-group v-for="(item, index) in todos" :key="index">

                    <b-list-group-item>
                        <h3 style="text-align: center"> {{item.name}}</h3>
                        <br>
                        <b-button-group>
                            <b-button variant="success" @click="getList(item.id)">Show List</b-button>
                            <b-button variant="danger" @click="deleteList(item.id)">Delete List</b-button>
                        </b-button-group>
                    </b-list-group-item>

                </b-list-group>
            </b-row>
        </b-container>
    </div>

    <br>

    <br>

    <div id="selectedList" style="display: none">

        <h1 style="text-align: center">Selected List</h1>
        <br>
        <b-container class="bv-example-row">

            <b-row>
                <b-col sm="4">
                    <b-card border-variant="primary" header="" header-bg-variant="primary" header-text-variant="white" :title="selectedList.name">
                        <b-card-text>
                            <tr v-for="desc in selectedList.todoElements" :key="desc.index">
                                {{desc.index}}<br>
                                Name: {{desc.name}}<br>
                                Description: {{desc.description}}
                                <br>
                                Status: {{desc.status}} <br>
                                Deadline: {{desc.deadline}}<br>
                                <b-button-group>
                                    <b-button variant="danger" @click="deleteElement(desc.id)">Delete Element</b-button>
                                    <b-button variant="danger" @click="completeStatus(desc.id)">Mark As Completed</b-button>
                                </b-button-group>
                                <hr>
                            </tr>

                            <div>
                                <b-button :id="'button'+selectedList.id" @click="modalShow = !modalShow">Add Item</b-button>

                                <b-modal :id="'modal'+selectedList.id" v-model="modalShow" title="Add New Element">
                                    <b-form-input v-model="nameBody" placeholder="Enter element name"></b-form-input>
                                    <br>
                                    <b-form-input v-model="descriptionBody" placeholder="Enter element description"></b-form-input><br>
                                    <label for="example-datepicker">Choose a date</label>
                                    <br>
                                    <b-form-datepicker id="example-datepicker" v-model="deadlineBody" class="mb-2"></b-form-datepicker>
                                    <br>
                                    <b-form-input v-model="statusBody" placeholder="Enter element status"></b-form-input>
                                    <br>
                                    <label for="example-datepicker">Add Dependency</label>
                                    <b-form-select v-model="dependencyBody" :options="selectedList.todoElements" value-field="id" text-field="name"></b-form-select>
                                    <br>

                                    <b-button :id="'add'+selectedList.id" variant="success" @click="addElementToList(selectedList.id)">Add</b-button>

                                </b-modal>
                            </div>
                        </b-card-text>

                    </b-card>
                </b-col>
                <b-col sm="8">
                    <vue-good-table @on-selected-rows-change="selectionChanged" :columns="columns" :rows="selectedList.todoElements" :select-options="{ 
    enabled: true,
  }" :search-options="{ enabled: true }">
                        <div slot="selected-row-actions">
                        </div>
                    </vue-good-table>
                </b-col>

            </b-row>

        </b-container>

    </div>

</div>
</template>

<script>
import axios from 'axios'

// app Vue instance
const Todos = {
    name: 'Todos',
    props: {},
    // app initial state
    data: function () {
        return {
            columns: [{
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Description',
                    field: 'description',
                    type: 'number',
                },
                {
                    label: 'Deadline',
                    field: 'deadline',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd HH:mm:ss',
                    dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
                },
                {
                    label: 'Status',
                    field: 'status',
                },
            ],
            selectedList: [],
            todos: [],
            postListBody: '',
            nameBody: '',
            descriptionBody: '',
            deadlineBody: '',
            statusBody: '',
            modalShow: false,
            dependencyBody: 0,
        }
    },
    mounted() {
        axios.get('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/api/' + this.$route.params.username + '/todolists/')
            .then(response => (this.todos = response.data))
            .catch(error => {
                console.log(error);
            });
    },
    // computed propertiess
    // http://vuejs.org/guide/computed.html
    methods: {
        showListofTodos() {
            let x = document.getElementById("todoLists");
            let y = document.getElementById("selectedList");

            if (x.style.display === "none") {
                x.style.display = "block";
            } 

            if (x.style.display === "block" && y.style.display === "block") {
                 x.style.display = "none";
                y.style.display = "none";
            }
        },
        addList() {
            axios.post('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/api/todolists/', {
                    name: this.postListBody
                })
                .then(response => {
                    this.todlocalhostos.push(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addElementToList(id) {
            axios.post('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/api/todoelement/' + id + '/', {
                    name: this.nameBody,
                    description: this.descriptionBody,
                    deadline: this.deadlineBody,
                    status: this.statusBody,
                    dependency_id: this.dependencyBody
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getList(id) {
            axios.get('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/api/todolists/' + id + '/')
                .then(response => (this.selectedList = response.data))
                .catch(error => {
                    console.log(error);
                });

            let x = document.getElementById("selectedList");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        },
        getTheSelectedOne(number) {
            console.log(number)
        },
        deleteList(id) {
            axios.delete('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/api/todolists/' + id + '/');
        },
        deleteElement(id) {
            axios.delete('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/todoelement/' + id + '/');
        },
        completeStatus(id) {
            axios.put('http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/todoelement/' + id + '/', {
                    status: 'Completed'
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },

}

export default Todos
</script>

<style>
[v-cloak] {
    display: none;
}
</style>
