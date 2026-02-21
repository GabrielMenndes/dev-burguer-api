import * as Yup from 'yup';
import Category from '../models/Category.js';
import Product from '../models/product.js';

class ProductController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ errors: err.errors });
    }

    const { name, price, category_id, offer } = req.body;
    const { filename } = req.file;

    const category = await Category.findByPk(category_id);
    if (!category) {
      return res.status(400).json({ error: 'Categoria não encontrada.' });
    }

    const newProduct = await Product.create({
      name,
      price,
      category_id,
      path: filename,
      offer,
    });

    return res.status(201).json({ newProduct });
  }

  async update(req, res) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ errors: err.errors });
    }

    const { name, price, category_id, offer } = req.body;
    const { id } = req.params;

    if (category_id) {
      const category = await Category.findByPk(category_id);
      if (!category) {
        return res.status(400).json({ error: 'Categoria não encontrada.' });
      }
    }

    const updateData = {
      name,
      price,
      category_id,
      offer,
    };
    if (req.file) {
      const { filename } = req.file;
      updateData.path = filename;
    }

    await Product.update(updateData, {
      where: { id },
    });

    return res.status(200).json({ message: 'Produto atualizado com sucesso.' });
  }

  async index(_req, res) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name'],
      },
    });

    return res.status(200).json(products);
  }
}

export default new ProductController();
