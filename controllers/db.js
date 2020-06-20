const QA = require('../models/QA');

const postToSQL = async (req, res) => {
  const { ID, module, system, screen, component, field_desc, test_desc, desired_result, project, status, board_name } = req.body;
  
  data = {
    ID, 
    module,
    system,
    screen,
    component,
    field_desc,
    test_desc,
    desired_result,
    project,
    status: +status == 1 ? true : false,
    date: new Date(),
    board_name,
  };
  await SQL(data);
  // await Monday(data);
  // res.status(200).send({ message: data });
};

const SQL = async data => {
  try {
    await QA.create(data);
  } catch (err) {
    console.log(err.message);
  }
}

const Monday = async data => {
  // post data to specific board
}


module.exports = { postToSQL }