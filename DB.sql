PGDMP  #                	    |            postgres    16.2    16.2 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     j   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3595            �            1259    16405    connections    TABLE     �   CREATE TABLE public.connections (
    user_email character varying(255) NOT NULL,
    con_email character varying(255) NOT NULL,
    con_date date,
    con_score integer
);
    DROP TABLE public.connections;
       public         heap    admin    false            �            1259    16400    user    TABLE     �  CREATE TABLE public."user" (
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(1000) NOT NULL,
    fname character varying(50),
    lname character varying(50),
    last_login date,
    last_password_change date,
    photo_url character varying(2000),
    phone character varying(15),
    address character varying(255)
);
    DROP TABLE public."user";
       public         heap    admin    false                      0    16405    connections 
   TABLE DATA           Q   COPY public.connections (user_email, con_email, con_date, con_score) FROM stdin;
    public          admin    false    217   Y	                 0    16400    user 
   TABLE DATA           �   COPY public."user" (username, email, password, fname, lname, last_login, last_password_change, photo_url, phone, address) FROM stdin;
    public          admin    false    216   �	          >   x�KL����,O5N��"�D�`&D�zFi����A���Ѥi�� �c���� ��3         D   x�+O5N�,���1~����##]C]CKd&%Z��R�9���NObJnf'2I��=... �F�     