const fs = require('fs');
const path = require('path');
const express=require('express');
//`${__dirname}/../dev-data/data/tours-simple.json`
const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname,'..', 'dev-data', 'data', 'tours-simple.json'),
    'utf-8'
  )
);
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);
  //converting req.params into a number
  const id = req.params.id * 1;
  //find methos returns that element which satisfies the condition
  const tour = tours.find((el) => el.id === id);
  // console.log(tour);
  // res.send("hmm");
  if (!tour) {
    res.status(404).json({ status: 'fail', message: 'invalid ID' });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        tour: tour,
      },
    });
  }
};
exports.updateTour = (req, res) => {
  //req.param->gives object
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    res.status(404).json({
      status: 'failed',
      message: 'invalid id!',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<h1>updated tour !!!</h1>',
      },
    });
  }
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    res.status(404).json({
      status: 'failed',
      message: 'invalid id!',
    });
  } else {
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
};
exports.createTour = (req, res) => {
  // console.log(req.body);
  //req.body is in json format
  const id = tours[tours.length - 1].id + 1;
  //object.assign merges two object into one
  const newtour = Object.assign({ id: id }, req.body);
  tours.push(newtour);
  // res.send('done');
  fs.writeFile(
    path.join(__dirname, 'dev-data', 'data', 'tours-simple.json'),
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newtour,
        },
      });
    }
  );
};
