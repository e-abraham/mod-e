const {sequelize} = require('../db')
const { Item } = require('../models/Item')


describe('Item Object',() => {

    beforeAll(async () => {
        await sequelize.sync({force: true})
    })
      //1-Data types test
        test ('Item has name', async ()=> {
            const testItem = await Item.create({name: 'baseball', image: 'ball.jepeg', category: 'home', price: 5.99, description: 'Leather cover with raised seams and Solid cork composition core' })
            expect(testItem.name).toBe('baseball');
            });

        test ('Item has image', async ()=> {
                const testItem = await Item.create({name :'baseball',image: 'ball.jpeg'})
                expect(testItem.image).toBe('ball.jpeg');
                });
    
    
        test ('Item has category', async ()=> {
            const testItem = await Item.create({name:'baseball',image:'ball.jpeg',category: 'home',price: 5.99,})
            expect(testItem.category).toBe('home');
            });
    
        test ('Item has price', async ()=> {
                const testItem = await Item.create({name:'baseball',image:'ball.jpeg',price: 5.99})
                expect(testItem.price).toBe(5.99);
                });
                

        test('name is of type string', async ()=> {
            const testItem = await Item.create({name: 'baseball'})
            expect(typeof testItem.name).toBe('string');
            })

    
        test('price is of type number', async () => {
            const testItem = await Item.create({price: 5.99})
            expect(typeof testItem.price).toBe('number');
            })

        })