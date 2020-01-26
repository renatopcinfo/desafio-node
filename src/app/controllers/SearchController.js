import User from '../models/User';

class SearchController {
  async index(req, res) {
    const searches = await User.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
    });

    return res.json(searches);
  }
}

export default new SearchController();
