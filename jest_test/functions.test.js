
const functions = require('./functions');


test('adds 2 + 2 equal 4', () => {

    expect(functions.add(2, 2)).toBe(4);

});

test('adds 2 + 2  NOT equal 4', () => {

    expect(functions.add(2, 2)).not.toBe(5);

});
test('Should be null', () => {

    expect(functions.isNull()).toBe(null);

});
test('Should be falsy', () => {

    expect(functions.checkValue(0)).toBeFalsy();

});
test('User should be Jim Schotanus object', () => {

    expect(functions.createUser()).toEqual({
        firstName: 'Jim',
        lastName: 'Schotanus'
        
    });

});
test('Shoud be under 1600', ()=> {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no i in team', ()=>{
    expect('team').not.toMatch(/I/i);
});
test('Admin should be in user name', ()=>{
    usernames = ['john', 'karen', 'admin']; 
    expect(usernames).toContain('admin')
});

/*//async data
test('user fetched name should be Leanne Graham', () => {
   //expect.assertions(1);
     (functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    }));
});

*/
test('user fetched name should be Leanne Graham', async () => {
    //expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    
});





module.exports = functions;