/**
 * 
 */
app
		.controller(
				'holidayController',
				[
						'$scope','DTOptionsBuilder','DTColumnDefBuilder',
						function($scope,DTOptionsBuilder, DTColumnDefBuilder) {
							var self = this;
							self.id=10;
							self.holiday = {								
								id:null,
								date : null,
								month : '',
								day : '',
								reason : '',
								remarks : ''
							};
							self.holidays = [// In future we will get
												// it from server using service
									{
										
										id:1,
										date : 13,
										month : 'January',
										day : 'Friday',
										reason : 'Pongal',
										remarks : 'Saturday is Pongal. Since it is a regular week end off not mentioned.'
									},
									{
										id:2,
										date : 26,
										month : 'January',
										day : 'Thursday',
										reason : 'Republic Day',
										remarks : ''
									},
									{
										id:3,
										date : 14,
										month : 'April',
										day : 'Friday',
										reason : 'Tamil New Year',
										remarks : ''
									},
									{
										id:4,
										date : 01,
										month : 'May',
										day : 'Monday',
										reason : 'May Day',
										remarks : ''
									},
									{
										
										id:5,
										date : 15,
										month : 'August',
										day : 'Tuesday',
										reason : 'Independence Day',
										remarks : ''
									},
									{
										id:6,
										date : 25,
										month : 'August',
										day : 'Friday',
										reason : 'Ganesh Chadurthi',
										remarks : ''
									},
									{
										id:7,
										date : 29,
										month : 'September',
										day : 'Friday',
										reason : 'Pooja Holiday',
										remarks : 'Sep 28th is also Pooja Holiday. But we are giving it on 29th only.'
									}, {
										id:7,
										date : 02,
										month : 'October',
										day : 'Monday',
										reason : 'Gandhi Jayanthi',
										remarks : ''
									}, {
										id:8,
										date : 18,
										month : 'October',
										day : 'Wednessday',
										reason : 'Deepavali',
										remarks : ''
									}, {
										id:9,
										date : 25,
										month : 'December',
										day : 'Monday',
										reason : 'Christmas',
										remarks : ''
							
									} ];
							self.dtOptions = DTOptionsBuilder.newOptions();					      
					    self.dtColumnDefs = [
					        DTColumnDefBuilder.newColumnDef(0).notSortable(),
					        DTColumnDefBuilder.newColumnDef(1).withOption('type','date-range'),
					        DTColumnDefBuilder.newColumnDef(2).notSortable(),
					        DTColumnDefBuilder.newColumnDef(3).notSortable(),
					        DTColumnDefBuilder.newColumnDef(4).notSortable(),
					        DTColumnDefBuilder.newColumnDef(5).notSortable()
					    ];
						
							self.submit = function() {
								if (self.holiday.id === null) {
									self.holiday.id = self.id++;
									console.log('Saving New holiday', self.holiday);
									self.holidays.push(self.holiday);// Or send to
																// server
											
								} else {
									for (var i = 0; i < self.holidays.length; i++) {
										if (self.holidays[i].id === self.holiday.id) {
											self.holidays[i] = self.holiday;
											break;
										}
									}
									console.log('Holiday updated with id ',
											self.holiday.id);
								}
								self.reset();
							};

							self.edit = function(id) {
								console.log('id to be edited', id);
								for (var i = 0; i < self.holidays.length; i++) {
									if (self.holidays[i].id === id) {
										self.holiday = angular.copy(self.holidays[i]);
										break;
									}
								}
							}

							self.remove = function(id) {
								console.log('id to be deleted', id);
								for (var i = 0; i < self.holidays.length; i++) {
									if (self.holidays[i].id === id) {
										self.holidays.splice(i, 1);
										if (self.holiday.id === id) {// It is
																	// shown in
																	// form,
																	// reset it.
											self.reset();
										}
										break;
									}
								}
							}

							self.reset = function() {
								self.holiday = {
										id:null,
										date : null,
										month : '',
										day : '',
										reason : '',
										remarks : ''
								};
								$scope.myForm.$setPristine(); // reset Form
							}

						} ]);