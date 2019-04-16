<template>
    <div>
        <caption>
            {{monthNames[month]}}
        </caption>
        <table v-if="days">

            <tr>
                <th v-for="day in no_of_days.getDate()">{{day}}</th>
            </tr>
            <tr>
                <td v-for="no in days" class="dot"
                    :style="{'background-color': no ? 'green' : 'red'}"></td>
            </tr>
        </table>
        <el-table
                :data="user.attendances"
                stripe
                :summary-method="getSummaries"
                show-summary
                style="width: 100%">
            <el-table-column
                    prop="started_at"
                    label="Started At">
            </el-table-column>
            <el-table-column
                    prop="stopped_at"
                    label="Stopped At">
            </el-table-column>
            <el-table-column
                    prop="Timing"
                    label="As Hour">
                <template slot-scope="scope">
                    {{scope.row.timing * 0.0002777778}}
                </template>
            </el-table-column>

        </el-table>
    </div>

</template>

<script>
    export default {
        name: "attendance",
        data() {
            var d = new Date(),
                month = d.getMonth(),
                year = d.getYear();
            return {
                month: month,
                year: year,
                no_of_days: new Date(year, month + 1, 0),
                user: {
                    attendances: []
                },
                monthNames: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ]
            }
        },
        computed: {
            days() {
                var vm = this,
                    index = 0,
                    days = {}
                while (index < vm.no_of_days.getDate()) {
                    days[index + 1] = false
                    index++
                }
                if (vm.user.attendances ? vm.user.attendances.length : null) {

                    index = 0
                    while (index < vm.user.attendances.length) {
                        var d = new Date(vm.user.attendances[index].started_at.split(" ")[0]).addDays(1)
                        if (d.getDate()) {
                            days[d.getDate()] = true
                        }
                        index++
                    }
                }
                return vm.user ? days : {}
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.params.id) {
                axios.get(`/api/user/${to.params.id}/attendances`).then(function (response) {
                    next(vm => vm.setData(response.data))
                })
            }
        },
        beforeRouteUpdate(to, from, next) {
            var vm = this
            if (to.params.id) {
                axios.get(`/api/user/${to.params.id}/attendances`).then(function (response) {
                    vm.setData(response.data)
                    next()
                })
            }
        },
        methods: {
            setData(data) {
                this.user = data
            },
            getSummaries(param) {
                const {columns, data} = param;
                const sums = [], vm = this;
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = `Total Cost: $${vm.user.total_timing}`;
                        return;
                    }
                    if (index === 2) {
                        sums[index] = data.reduce((prev, curr) => {
                            const value = Number();
                            if (!isNaN(value)) {
                                return prev + curr.timing * 0.0002777778;
                            } else {
                                return prev;
                            }
                        }, 0) + ' Hour(s)';
                    }
                });
                return sums;
            }
        }
    }
</script>

<style scoped>
    .dot {
        height: 15pt;
        width: 15pt;
        border-radius: 50%;
    }

    table, th, td {
        border: 1px solid black;
    }
</style>