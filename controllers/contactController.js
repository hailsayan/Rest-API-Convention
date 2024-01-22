//@dec Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({ message : 'get all contacts' });
};

//@dec Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, res)=>{
    console.log(req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('all fields are mandatory')
    }
    res.status(201).json({ message : 'create contact' });
};

//@dec Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res)=>{
    res.status(200).json({ message : `get contact for ${req.params.id}` });
};

//@dec Update contact
//@route PUT /api/contacts:id
//@access public
const updateContact = (req, res)=>{
    res.status(200).json({ message : `update contact for ${req.params.id}` });
};

//@dec Delete contact
//@route DELETE /api/contacts:id
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({ message : `delete contact for ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};