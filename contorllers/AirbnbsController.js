const Airbnb = require("./../models/Airbndmodel");

exports.getPropertyType = async (req, res) => {
  try {
    const aggregationPipeline = [
      {
        $group: {
          _id: "$property_type",
          total: { $count: {} },
        },
      },
    ];
    const response = await Airbnb.aggregate(aggregationPipeline);
    return res.status(200).json({ ...response });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};
