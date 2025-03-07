from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Your data as a dictionary
data = {
    "maindishes": [
        {
            "id": "1",
            "name": "Encebollado",
            "image": "/static/images/encebollado.jpg",  # Updated to /static
            "price": 13.00,
            "description": "A traditional Ecuadorian fish soup made with albacore tuna, yuca, and onions, typically served with avocado and lime."
        },
        {
            "id": "2",
            "name": "Encebollado Mixto",
            "image": "/static/images/mixto.jpg",  # Updated to /static
            "price": 13.00,
            "description": "Fish stew, with tuna and shrimp, cassava and pickled onions served with rice, banana chips and corn nuts."
        },
        {
            "id": "3",
            "name": "Ceviche De Camaron",
            "image": "/static/images/ceviche2.jpg",  # Updated to /static
            "price": 15.00,
            "description": "A refreshing shrimp ceviche marinated in lime juice with tomatoes, onions, and cilantro, served with popcorn and plantain chips."
        },
        {
            "id": "4",
            "name": "Arroz Con Camarones",
            "image": "/static/images/arrozcon.jpg",  # Updated to /static
            "price": 15.00,
            "description": "Arroz con camarones [pronounced a·rros kon ka·ma·ro·nes] translates to “rice with shrimp”. Another name for this dish is arroz amarillo con camarones which translates to “yellow rice with shrimp”."
        },
        {
            "id": "5",
            "name": "Arroz Marinero",
            "image": "/static/images/arrozmar.jpg",  # Updated to /static
            "price": 15.00,
            "description": "This seafood rice recipe, also known as Arroz marinero or Arroz con mariscos, is a delicious Latin American dish made with rice cooked in seafood broth and sautéed with shrimp, clams, squid, bay scallops, onions, garlic, bell pepper, cilantro and spices."
        },
        {
            "id": "6",
            "name": "Pescado Frito",
            "image": "/static/images/pescado.jpg",  # Updated to /static
            "price": 14.00,
            "description": "Fried Fish, comes with White Rice, Fried Plantains (Patacones or Maduro), Salad (lettuce, tomato, onion, sometimes avocado), lemon on the side, and fries if you desire on the side as well."
        }
    ],

    "sidedishes": [
        {
            "id": "10",
            "name": "Salchipapa",
            "image": "/static/images/salchipapa.jpg",  # Updated to /static
            "description": "A popular street food dish made of French fries topped with sliced hot dogs and served with various condiments like ketchup and mayonnaise.",
            "price": 5.00
        },
        {
            "id": "11",
            "name": "Nuggets De Pollo Con Papas Fritas",
            "image": "/static/images/nuggets.jpg",  # Updated to /static
            "description": "Chicken nuggets with a side of French fries.",
            "price": 5.00
        },
        {
            "id": "12",
            "name": "Papa y Pollo",
            "image": "/static/images/papaypollo.jpg",  # Updated to /static
            "description": "Chicken with French Fries, can come with lettuce, tomato, mayonnaise, ketchup, aji (Ecuadorian hot sauce)",
            "price": 5.00
        }
    ],

    "drinks": [
        {
            "id": "20",
            "name": "Inca Kola",
            "image": "/static/images/inca.jpg",  # Updated to /static
            "price": 1.00,
            "description": "A sweet, bright yellow soda that is a popular choice in Ecuador, often enjoyed with meals."
        },
        {
            "id": "21",
            "name": "Coke",
            "image": "/static/images/coke.jpg",  # Updated to /static
            "price": 1.00,
            "description": "Classic Coca-Cola, a favorite carbonated beverage worldwide."
        },
        {
            "id": "22",
            "name": "Gatorade",
            "image": "/static/images/green.jpg",  # Updated to /static
            "price": 2.00,
            "description": "A sports drink available in various flavors, perfect for refreshing after physical activity."
        },
        {
            "id": "23",
            "name": "Pepsi",
            "image": "/static/images/pepsi.jpg",  # Updated to /static
            "price": 1.00,
            "description": "Another popular carbonated soft drink, known for its bold flavor."
        },
        {
            "id": "24",
            "name": "Guitig (Sparkling Water)",
            "image": "/static/images/guitig.jpg",  # Updated to /static
            "price": 2.00,
            "description": "A refreshing sparkling water that is perfect for pairing with meals."
        },
        {
            "id": "25",
            "name": "Heineken",
            "image": "/static/images/Heineken.jpg",  # Updated to /static
            "price": 3.00,
            "description": "A well-known international lager, enjoyed for its crisp and refreshing taste."
        }
    ],

    "desserts": [
        {
            "id": "40",
            "name": "Fresas Con Crema",
            "image": "/static/images/gelatina.jpg",  # Updated to /static
            "price": 3.00,
            "description": "Fresh strawberries served with a sweet and creamy sauce."
        },
        {
            "id": "41",
            "name": "Flan",
            "image": "/static/images/flan.jpg",  # Updated to /static
            "price": 5.00,
            "description": "A baked custard dessert with a caramel topping, popular in Latin America and Spain."
        }
    ]
}


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


@app.route('/static/images/<path:filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'static/images'), filename)


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
