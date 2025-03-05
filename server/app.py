from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your data as a dictionary
data = {
    "maindishes": [
        {
            "id": "1",
            "name": "Encebollado",
            "image": "/images/encebollado.jpg",
            "price": 13.00,
            "description": "A traditional Ecuadorian fish soup made with albacore tuna, yuca, and onions, typically served with avocado and lime."
        },
        {
            "id": "2",
            "name": "Encebollado Mixto",
            "image": "/images/mixto.jpg",
            "price": 13.00,
            "description": "Fish stew, with tuna and shrimp, cassava and pickled onions served with rice, banana chips and corn nuts."
        },
        {
            "id": "3",
            "name": "Ceviche De Camaron",
            "image": "/images/ceviche2.jpg",
            "price": 15.00,
            "description": "A refreshing shrimp ceviche marinated in lime juice with tomatoes, onions, and cilantro, served with popcorn and plantain chips."
        },
        {
            "id": "4",
            "name": "Arroz Con Camarones",
            "image": "/images/arrozcon.jpg",
            "price": 15.00,
            "description": "Arroz con camarones [pronounced a·rros kon ka·ma·ro·nes] translates to “rice with shrimp”. Another name for this dish is arroz amarillo con camarones which translates to “yellow rice with shrimp”."
        },
        {
            "id": "5",
            "name": "Arroz Marinero",
            "image": "/images/arrozmar.jpg",
            "price": 15.00,
            "description": "This seafood rice recipe, also known as Arroz marinero or Arroz con mariscos, is a delicious Latin American dish made with rice cooked in seafood broth and sautéed with shrimp, clams, squid, bay scallops, onions, garlic, bell pepper, cilantro and spices."
        },
        {
            "id": "6",
            "name": "Pescado Frito",
            "image": "/images/pescado.jpg",
            "price": 14.00,
            "description": "Fried Fish, comes with White Rice, Fried Plantains (Patacones or Maduro), Salad (lettuce, tomato, onion, sometimes avocado), lemon on the side, and fries if you desire on the side as well."
        }
    ],

    "sidedishes": [
        {
            "id": "10",
            "name": "Salchipapa",
            "image": "/images/salchipapa.jpg",
            "description": "A popular street food dish made of French fries topped with sliced hot dogs and served with various condiments like ketchup and mayonnaise.",
            "price": 5.00
        },
        {
            "id": "11",
            "name": "Nuggets De Pollo Con Papas Fritas",
            "image": "/images/nuggets.jpg",
            "description": "Chicken nuggets with a side of French fries.",
            "price": 5.00
        },
        {
            "id": "12",
            "name": "Papa y Pollo",
            "image": "/images/papaypollo.jpg",
            "description": "Chicken with French Fries, can come with lettuce, tomato, mayonnaise, ketchup, aji (Ecuadorian hot sauce)",
            "price": 5.00
        }
    ],

    "drinks": [
        {
            "id": "20",
            "name": "Inca Kola",
            "image": "/images/inca.jpg",
            "price": 1.00,
            "description": "A sweet, bright yellow soda that is a popular choice in Ecuador, often enjoyed with meals."
        },
        {
            "id": "21",
            "name": "Coke",
            "image": "/images/coke.jpg",
            "price": 1.00,
            "description": "Classic Coca-Cola, a favorite carbonated beverage worldwide."
        },
        {
            "id": "22",
            "name": "Gatorade",
            "image": "/images/green.jpg",
            "price": 2.00,
            "description": "A sports drink available in various flavors, perfect for refreshing after physical activity."
        },
        {
            "id": "23",
            "name": "Pepsi",
            "image": "/images/pepsi.jpg",
            "price": 1.00,
            "description": "Another popular carbonated soft drink, known for its bold flavor."
        },
        {
            "id": "24",
            "name": "Guitig (Sparkling Water)",
            "image": "/images/guitig.jpg",
            "price": 2.00,
            "description": "A refreshing sparkling water that is perfect for pairing with meals."
        },
        {
            "id": "25",
            "name": "Heineken",
            "image": "/images/Heineken.jpg",
            "price": 3.00,
            "description": "A well-known international lager, enjoyed for its crisp and refreshing taste."
        }
    ],

    "desserts": [
        {
            "id": "40",
            "name": "Fresas Con Crema",
            "image": "/images/gelatina.jpg",
            "price": 3.00,
            "description": "Fresh strawberries served with a sweet and creamy sauce."
        },
        {
            "id": "41",
            "name": "Flan",
            "image": "/images/flan.jpg",
            "price": 5.00,
            "description": "A baked custard dessert with a caramel topping, popular in Latin America and Spain."
        }
    ]
}

# Helper function to retrieve items by ID
def get_item_by_id(items, item_id):
    return next((item for item in items if item['id'] == item_id), None)

@app.route('/maindishes', methods=['GET'])
def get_maindishes():
    try:
        return jsonify(data['maindishes']), 200
    except Exception as e:
        return jsonify({"message": "Error fetching maindishes", "error": str(e)}), 500


@app.route('/maindishes/<maindish_id>', methods=['GET'])
def get_maindish(maindish_id):
    maindish = get_item_by_id(data['maindishes'], maindish_id)
    if maindish:
        return jsonify(maindish), 200
    return jsonify({"message": f"Maindish with ID {maindish_id} not found"}), 404

@app.route('/sidedishes', methods=['GET'])
def get_sidedishes():
    try:
        return jsonify(data['sidedishes']), 200
    except Exception as e:
        return jsonify({"message": "Error fetching sidedishes", "error": str(e)}), 500

@app.route('/sidedishes/<sidedish_id>', methods=['GET'])
def get_sidedish(sidedish_id):
    sidedish = get_item_by_id(data['sidedishes'], sidedish_id)
    if sidedish:
        return jsonify(sidedish), 200
    return jsonify({"message": f"Sidedish with ID {sidedish_id} not found"}), 404

@app.route('/drinks', methods=['GET'])
def get_drinks():
    try:
        return jsonify(data['drinks']), 200
    except Exception as e:
        return jsonify({"message": "Error fetching drinks", "error": str(e)}), 500

@app.route('/drinks/<drink_id>', methods=['GET'])
def get_drink(drink_id):
    drink = get_item_by_id(data['drinks'], drink_id)
    if drink:
        return jsonify(drink), 200
    return jsonify({"message": f"Drink with ID {drink_id} not found"}), 404

@app.route('/desserts', methods=['GET'])
def get_desserts():
    try:
        return jsonify(data['desserts']), 200
    except Exception as e:
        return jsonify({"message": "Error fetching desserts", "error": str(e)}), 500

@app.route('/desserts/<dessert_id>', methods=['GET'])
def get_dessert(dessert_id):
    dessert = get_item_by_id(data['desserts'], dessert_id)
    if dessert:
        return jsonify(dessert), 200
    return jsonify({"message": f"Dessert with ID {dessert_id} not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
