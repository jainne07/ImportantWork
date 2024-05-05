export const initialState ={
  posts:[
    {
      "id": 1,
      "title": "aliquam molestiae rerum",
      "body": "inventore aliquam molestiae rerum natus ipsam quas temporibus minus. Porro saepe ea voluptates libero. ratione placeat error impedit. Quos tempore nihil dolor quam culpa magni, neque consequuntur accusantium id ipsa placeat inventore reprehenderit itaque eum laboriosam laborum quo ad ullam harum, et quod",
      "likes": "12"
    },
    {
      "id": 2,
      "title": "amet consectetur adipisicing",
      "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quas, harum cupiditate distinctio officia, sit reiciendis asperiores molestiae, a quos sed necessitatibus quam. Nam eveniet aliquam quam quaerat. Nam aliquam corporis alias labore, ratione placeat error impedit. Quos tempore nihil dolor quam culpa magni, neque consequuntur accusantium id ipsa placeat inventore reprehenderit itaque eum laboriosam laborum quo ad ullam harum, et quod nemo? Sed provident aperiam magni consequuntur soluta numquam aliquid illum saepe eaque odio at quos minima ipsam, voluptatem corporis eum a assumenda culpa atque omnis? Cum magni harum numquam, natus cupiditate dolorum! Incidunt tempore atque voluptatum unde ipsa corporis quos quo cumque similique, totam deleniti? Eaque nihil iusto suscipit dolorum quia asperiores esse sequi porro facilis minima velit placeat molestias, quis maiores sapiente sed optio doloremque quam laborum, magnam tempora! Voluptates fugit deleniti blanditiis molestiae at consequatur quod reiciendis autem, sint libero consequuntur quia dolorum provident error quas adipisci nobis! Necessitatibus, praesentium velit nulla in soluta repellat minima nesciunt enim labore. Odit qui dignissimos deleniti consequuntur, officia in earum at perferendis obcaecati repudiandae nihil quos officiis expedita quae unde molestias recusandae minima nobis asperiores consectetur! Fugiat commodi est, itaque dolore distinctio aut inventore quaerat dolores non eveniet impedit, accusantium aspernatur sequi assumenda! Repellendus ipsam soluta, aliquid, temporibus reprehenderit corrupti accusantium eveniet dicta, maxime praesentium sequi explicabo in repellat aut eos! Quidem voluptas iste natus accusamus non dolore animi officia reprehenderit temporibus.",
      "likes": "111"
    },
    {
      "id": 3,
      "title": "New post updated",
      "body": "temporibus reprehenderit corrupti accusantium eveniet dicta, maxime praesentium sequi explicabo in repellat aut eos! Quidem voluptas iste natus accusamus non dolore animi officia reprehenderit temporibus",
      "likes": "23"
    }
]
}
const postReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_POST':
      return state.concat(action.payload)
    case 'DELETE_POST':
        return state.filter((post, i) => post.id !== action.payload) 
    case 'EDIT_POST':
      return state.map((post) => post.id === action.payload.id ? action.payload  : post )
      default:
         return state
    }
}
export default postReducer