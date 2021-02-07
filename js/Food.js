class Food{
    constructor(x,y){
        this.body= createSprite(x, y, 50, 50);
        this.image = "Images/Milk.png";

        x= this.body.position.x;
        y= this.body.position.y;

    }

    display(){
        x= 80;
        y=100;

        imageMode(CENTER);
        image(this.image,720, 220, 70, 70);

        if(this.foodStock!=0){
            for (var i=0;i<this.foodStock;i++){
                if (i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
            }
        }
    }

    getFoodStock(){
        var FoodStockRef = database.ref('Food');
        FoodStockRef.on("value",function(data){
            foodStock = data.val();
        })
      }

      updateCount(count){
        database.ref('/').update({
          Food: foodS
        });
      }
    
}