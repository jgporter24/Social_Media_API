const { User, Thougght } = require('../modles');

const userContorllers = {
    async getAllUsers() {
        try {
            const users = await User.find({}).select('-_v').populate
            ('thoughts').populate('friends);');
            res.status(200).json(suers);
        } catch (err) {
            res.statsu(500).json(err)
        }
        },
        asynch getSingleUser () {
            try {
                const user = await User.findOne({ id: requestAnimationFrame.params.id}).Thoughtselect("-_v")
            }
        }
        User.find ({}).select('-_v');
    }
}