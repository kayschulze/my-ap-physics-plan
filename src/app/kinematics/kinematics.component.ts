import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kinematics',
  templateUrl: './kinematics.component.html',
  styleUrls: ['./kinematics.component.css']
})

export class KinematicsComponent implements OnInit {
  onSubmit(variableInputForm: NgForm) {
    var resetRadioButtons = function() {
      $('input[name = "displacement"]').prop('checked', false);
      $('input[name = "v0-value"]').prop('checked', false);
      $('input[name = "vf-value"]').prop('checked', false);
      $('input[name = "acceleration"]').prop('checked', false);
      $('input[name = "time"]').prop('checked', false);
    }

    var hideAllEquations = function() {
      $(".equation101-showing").hide();
      $(".equation102-showing").hide();
      $(".equation103-showing").hide();
      $(".equation104-showing").hide();
      $(".equation201-showing").hide();
      $(".equation202-showing").hide();
      $(".equation203-showing").hide();
      $(".equation204-showing").hide();
      $(".equation301-showing").hide();
      $(".equation302-showing").hide();
      $(".equation303-showing").hide();
      $(".equation304-showing").hide();
      $(".equation401-showing").hide();
      $(".equation402-showing").hide();
      $(".equation403-showing").hide();
      $(".equation404-showing").hide();
      $(".equation501-showing").hide();
      $(".equation502-showing").hide();
      $(".equation503-showing").hide();
      $(".equation504-showing").hide();
    }

    var displayAnswer = function(displacement, v0value, vfvalue, acceleration, time) {
      if (acceleration == "N/A") {
        if (displacement == "unknown") {
          $(".equation101-showing").show();
        }
        else if (v0value == "unknown") {
          $(".equation102-showing").show();
        }
        else if (vfvalue == "unknown") {
          $(".equation103-showing").show();
        }
        else if (time == "unknown") {
          $(".equation104-showing").show();
        }
      }
      else if (displacement == "N/A") {
        if (vfvalue == "unknown") {
          $(".equation201-showing").show();
        }
        else if (v0value == "unknown") {
          $(".equation202-showing").show();
        }
        else if (acceleration == "unknown") {
          $(".equation203-showing").show();
        }
        else if (time == "unknown") {
          $(".equation204-showing").show();
        }
      }
      else if (vfvalue == "N/A") {
        if (displacement == "unknown") {
          $(".equation301-showing").show();
        }
        else if (v0value == "unknown") {
          $(".equation302-showing").show();
        }
        else if (acceleration == "unknown") {
          $(".equation303-showing").show();
        }
        else if (time == "unknown") {
          $(".equation304-showing").show();
        }
      }
      else if (time == "N/A") {
        if (vfvalue == "unknown") {
          $(".equation401-showing").show();
        }
        else if (v0value == "unknown") {
          $(".equation402-showing").show();
        }
        else if (acceleration == "unknown") {
          $(".equation403-showing").show();
        }
        else if (displacement == "unknown") {
          $(".equation404-showing").show();
        }
      }
      else if (v0value == "N/A") {
        if (displacement == "unknown") {
          $(".equation501-showing").show();
        }
        else if (vfvalue == "unknown") {
          $(".equation502-showing").show();
        }
        else if (acceleration == "unknown") {
          $(".equation503-showing").show();
        }
        else if (time == "unknown") {
          $(".equation504-showing").show();
        }
      }
    };

    var isItKnown = function(value) {
      if (value == "known") {
        return 1;
      }
      else {
        return 0;
      }
    };

    var isItUnknown = function(value) {
      if (value == "unknown") {
        return 1;
      }
      else {
        return 0;
      }
    };

    var inputIsValid = function(displacement, v0, vf, acceleration, time) {
      var numberOfKnowns = isItKnown(displacement) + isItKnown(v0) +
        isItKnown(vf) + isItKnown(acceleration) + isItKnown(time);
      var numberOfUnknowns = isItUnknown(displacement) + isItUnknown(v0) +
        isItUnknown(vf) + isItUnknown(acceleration) + isItUnknown(time);

      if (numberOfKnowns == 3) {
        if (numberOfUnknowns == 1) {
          return 1;
        }
        else {
          return 0;
        }
      }
    };

    var findEquation = function(displacement, v0, vf, acceleration, time) {
      hideAllEquations();
      var justTry = inputIsValid(displacement, v0, vf, acceleration, time);
      if (justTry == 1) {
        displayAnswer(displacement, v0, vf, acceleration, time);
      }
      else {
        alert("Input 3 Known Variables, 1 Unknown Variable, and 1 Not Applicable Variable.");
      }
    };

    hideAllEquations();

    var displacementChecked = $("input:radio[name=displacement]:checked").val();
    var initialVelocityChecked = $("input:radio[name=v0-value]:checked").val();
    var finalVelocityChecked = $("input:radio[name=vf-value]:checked").val();
    var accelerationChecked = $("input:radio[name=acceleration]:checked").val();
    var timeChecked = $("input:radio[name=time]:checked").val();

    findEquation(displacementChecked, initialVelocityChecked,
      finalVelocityChecked, accelerationChecked, timeChecked);

    resetRadioButtons();
  }

  constructor() { }

  ngOnInit(): void {


  }


}
